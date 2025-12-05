import React, { useMemo, useRef, useState, useEffect } from "react";

const DEFAULT_MODEL_CANDIDATES = [
  "models/text-bison-001",
  "models/chat-bison-001",
  "models/gemini-1.5-flash",
  "models/gemini-1.5-pro",
  "models/gemini-pro",
];

function buildContentsFromMessages(messages) {
  return messages.map((m) => ({
    role: m.role === "user" ? "user" : "assistant",
    parts: [{ text: m.text }],
  }));
}

const parseApiError = async (resp) => {
  try {
    const j = await resp.json();
    return j?.error?.message || JSON.stringify(j);
  } catch (e) {
    try { return await resp.text(); } catch { return ""; }
  }
};

function fetchWithTimeout(resource, options = {}, timeoutMs = 20000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  return fetch(resource, { ...options, signal: controller.signal })
    .finally(() => clearTimeout(id));
}

// Añadir esta función (por ejemplo, debajo de fetchWithTimeout)
async function uploadFilesToServer(filesArray) {
  // filesArray: Array de File (file input)
  if (!filesArray || filesArray.length === 0) return [];
  const fd = new FormData();
  filesArray.forEach((f) => fd.append("files", f));
  try {
    const resp = await fetch("/api/upload", {
      method: "POST",
      body: fd,
    });
    if (!resp.ok) throw new Error("Upload failed");
    const j = await resp.json();
    // Espera: { files: [{ name, url, size, type }] }
    return Array.isArray(j.files) ? j.files : [];
  } catch (err) {
    console.error("uploadFilesToServer:", err);
    return [];
  }
}

export default function ChatGemini({
  title = "Asistente IA",
  systemPrompt = "Eres un asistente experto en física interactiva. Responde de forma clara, concisa y útil, con pasos cuando sea necesario.",
}) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeModel, setActiveModel] = useState("");
  const [messages, setMessages] = useState([
    { role: "model", text: "Hola, soy Gemini. ¿En qué puedo ayudarte?" },
  ]);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const listRef = useRef(null);

  // lista dinámica de modelos; inicializa con DEFAULT_MODEL_CANDIDATES
  const [modelCandidates, setModelCandidates] = useState(DEFAULT_MODEL_CANDIDATES);

  // attachments: { id, file, url, name, type, size }
  const [attachments, setAttachments] = useState([]);

  const canSend = useMemo(() => (!!input.trim() || attachments.length > 0) && !loading && !!apiKey, [input, loading, apiKey, attachments]);

  useEffect(() => {
    if (!apiKey) return;
    async function listModels() {
      try {
        const url = `https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`;
        const resp = await fetchWithTimeout(url, { method: "GET" }, 10000);
        if (!resp.ok) return;
        const data = await resp.json();
        if (Array.isArray(data?.models) && data.models.length > 0) {
          const found = data.models
            .map((m) => (m?.name ? m.name.replace(/^\/?models\//, "models/") : null))
            .filter(Boolean);
          const preferred = [
            ...new Set([
              ...found.filter((n) => /gemini|bison/i.test(n)),
              ...DEFAULT_MODEL_CANDIDATES,
            ]),
          ];
          setModelCandidates(preferred);
        }
      } catch {
        // silent
      }
    }
    listModels();
  }, [apiKey]);

  async function callGemini(model, contents) {
    const modelName = model.startsWith("models/") ? model : `models/${model}`;
    const endpoints = ["generateContent", "generateText", "generateMessage"];
    let lastErr = null;

    for (const endpoint of endpoints) {
      const url = `https://generativelanguage.googleapis.com/v1/${modelName}:${endpoint}?key=${apiKey}`;
      const body = JSON.stringify({
        contents,
        generationConfig: {
          temperature: 0.6,
          topP: 0.95,
          topK: 40,
          maxOutputTokens: 1024,
        },
      });

      try {
        const resp = await fetchWithTimeout(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
        });

        if (!resp.ok) {
          const detail = await parseApiError(resp);
          const err = new Error(`HTTP ${resp.status}: ${detail}`);
          err.status = resp.status;
          throw err;
        }

        const data = await resp.json();

        const text =
          data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join("") ||
          data?.outputs?.map((o) => o.text).join("") ||
          data?.content?.text ||
          data?.response?.text ||
          "(Sin respuesta del modelo)";

        return text;
      } catch (err) {
        lastErr = err;
        continue;
      }
    }

    throw lastErr || new Error("No se pudo contactar al servicio de Gemini/LLM.");
  }

  // Manejo de archivos
  const handleFiles = async (filesList) => {
    const files = Array.from(filesList).slice(0, 5); // limitar a 5 adjuntos
    const next = await Promise.all(files.map(async (f, idx) => {
      const url = URL.createObjectURL(f);
      return {
        id: `${Date.now()}-${idx}`,
        file: f,
        url,
        name: f.name,
        type: f.type,
        size: f.size,
      };
    }));
    setAttachments((prev) => [...prev, ...next]);
  };

  const removeAttachment = (id) => {
    setAttachments((prev) => {
      const removed = prev.find(a => a.id === id);
      if (removed?.url) URL.revokeObjectURL(removed.url);
      return prev.filter(a => a.id !== id);
    });
  };

  // Modificar sendMessage para usar uploadFilesToServer antes de construir el prompt
  async function sendMessage(e) {
    e?.preventDefault?.();
    if (!canSend) return;

    const userText = input.trim();
    setInput("");
    setError("");

    setLoading(true);

    try {
      // subir archivos (si hay) y obtener URLs públicas
      const filesToUpload = attachments.map(a => a.file);
      const uploaded = await uploadFilesToServer(filesToUpload); // [] si falla o no hay archivos

      // construir resumen usando URLs públicas si existen
      const attachmentsSummary = (uploaded.length > 0)
        ? uploaded.map(a => `${a.name} (${Math.round(a.size / 1024)} KB) -> ${a.url}`).join("; ")
        : attachments.map(a => `${a.name} (${Math.round(a.size / 1024)} KB)`).join("; ");

      const attachmentSystemText = attachmentsSummary
        ? `Adjuntos: ${attachmentsSummary}. Si hay URLs, puedes descargarlos para analizar.`
        : "";

      // construir mensaje visible localmente: incluir attachments previews
      const newMessages = [...messages, { role: "user", text: userText || "(Adjunto(s))", attachments }];
      setMessages(newMessages);

      const history = newMessages.slice(-8);

      // Para la IA: convertir attachments a un resumen (nombre y tamaño). No se sube el binario.
      // const attachmentsSummary = attachments.map(a => `${a.name} (${Math.round(a.size / 1024)} KB)`).join("; ");
      // const attachmentSystemText = attachments.length > 0 ? `Adjuntos: ${attachmentsSummary}. No puedo descargar los archivos; describiré cómo procesarlos si es necesario.` : "";

      const contents = buildContentsFromMessages(history.map(h => ({
        role: h.role,
        text: typeof h.text === "string" ? h.text : (h.text || "")
      })));

      const contentsWithSystem = [
        { role: "user", parts: [{ text: systemPrompt }] },
        ...(attachmentSystemText ? [{ role: "user", parts: [{ text: attachmentSystemText }] }] : []),
        ...contents,
      ];

      let lastErr = null;
      for (const model of modelCandidates) {
        try {
          const text = await callGemini(model, contentsWithSystem);
          setActiveModel(model);
          setMessages((prev) => [...prev, { role: "model", text }]);
          // limpiar adjuntos tras enviar con éxito
          attachments.forEach(a => a.url && URL.revokeObjectURL(a.url));
          setAttachments([]);
          lastErr = null;
          break;
        } catch (err) {
          lastErr = err;
          continue;
        }
      }
      if (lastErr) throw lastErr;
    } catch (e) {
      console.error(e);
      setError(`No fue posible obtener respuesta de Gemini. ${e?.message ? `Detalle: ${e.message}` : ""}`);
      setMessages((prev) => [
        ...prev,
        { role: "model", text: "Ocurrió un problema consultando a Gemini." },
      ]);
    } finally {
      setLoading(false);
      requestAnimationFrame(() => {
        try {
          listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
        } catch { }
      });
    }
  }

  // Nueva función para limpiar el chat
  const clearChat = () => {
    setMessages([
      { role: "model", text: "Hola, soy Gemini. ¿En qué puedo ayudarte?" },
    ]);
    setInput("");
    setError("");
    // limpiar adjuntos si existen
    attachments.forEach(a => a.url && URL.revokeObjectURL(a.url));
    setAttachments([]);
  };

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold shadow-lg px-4 py-2"
        title="Abrir chat de IA"
      >
        {open ? "Cerrar IA" : "Chat IA"}
      </button>

      {/* Panel de chat (más ancho y con revisión de espacio) */}
      {open && (
        <div className="fixed bottom-20 right-4 z-50 w-96 max-h-[80vh] rounded-xl border border-slate-700 bg-slate-900/95 text-slate-100 shadow-2xl flex flex-col">
          <div className="px-3 py-2 border-b border-slate-700 flex items-center justify-between">
            <div className="text-sm font-semibold">{title}</div>
            <div className="flex items-center gap-2">
              <div className="text-[10px] text-slate-400">{activeModel ? `${activeModel}` : "Gemini"}</div>
              <button
                onClick={clearChat}
                className="text-[11px] text-amber-300 hover:text-amber-200 px-2 py-1 rounded-md hover:bg-slate-800/50 transition"
                title="Borrar chat y empezar uno nuevo"
              >
                🗑️ Limpiar
              </button>
            </div>
          </div>

          {!apiKey && (
            <div className="p-3 text-[11px] text-amber-300 border-b border-slate-700">
              Falta configurar VITE_GEMINI_API_KEY en tu entorno para habilitar el chat.
            </div>
          )}

          <div className="p-2 text-[11px] text-slate-400 border-b border-slate-700">
            Modelos usados: {modelCandidates.slice(0, 3).join(", ")}
          </div>

          <div ref={listRef} className="flex-1 overflow-auto p-3 space-y-3 text-[13px]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-lg px-3 py-2 whitespace-pre-wrap leading-relaxed shadow ${m.role === "user"
                  ? "bg-emerald-500/90 text-slate-900"
                  : "bg-slate-800/90 text-slate-100 border border-slate-700"
                  }`}>
                  {m.text}
                  {/* si el mensaje contiene attachments, mostrar miniaturas/íconos */}
                  {m.attachments && m.attachments.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {m.attachments.map((a) => (
                        <div key={a.id} className="bg-slate-800/70 border border-slate-700 rounded-md p-1 text-xs flex items-center gap-2">
                          {a.type?.startsWith("image/") ? (
                            <img src={a.url} alt={a.name} className="w-12 h-8 object-cover rounded-sm" />
                          ) : (
                            <div className="w-12 h-8 flex items-center justify-center bg-slate-700 rounded-sm text-[10px] px-1">
                              {a.name.split('.').pop() || 'file'}
                            </div>
                          )}
                          <div className="flex flex-col">
                            <span className="text-[10px] text-slate-300">{a.name}</span>
                            <span className="text-[10px] text-slate-500">{Math.round(a.size / 1024)} KB</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-[11px] text-slate-400">Gemini está escribiendo...</div>
            )}
            {error && (
              <div className="text-[11px] text-red-400">{error}</div>
            )}
          </div>

          {/* Zona de adjuntos previews */}
          {attachments.length > 0 && (
            <div className="p-2 border-t border-slate-700 bg-slate-900/80">
              <div className="flex items-center justify-between text-[12px] text-slate-300 mb-1">
                <span>Adjuntos ({attachments.length})</span>
                <button onClick={() => {
                  attachments.forEach(a => a.url && URL.revokeObjectURL(a.url));
                  setAttachments([]);
                }} className="text-[11px] text-amber-300 hover:text-amber-200">Eliminar todos</button>
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {attachments.map(a => (
                  <div key={a.id} className="flex-shrink-0 bg-slate-800/70 border border-slate-700 rounded-md p-1 w-28">
                    <div className="flex items-center justify-center h-16">
                      {a.type?.startsWith("image/") ? (
                        <img src={a.url} alt={a.name} className="h-16 object-contain" />
                      ) : (
                        <div className="h-12 w-full flex items-center justify-center text-[12px] text-slate-300 bg-slate-700 rounded">{a.name.split('.').pop()}</div>
                      )}
                    </div>
                    <div className="mt-1 text-[11px] text-slate-300 truncate">{a.name}</div>
                    <div className="flex items-center justify-between mt-1">
                      <div className="text-[10px] text-slate-500">{Math.round(a.size / 1024)} KB</div>
                      <button onClick={() => removeAttachment(a.id)} className="text-[12px] text-rose-400 hover:text-rose-300 px-1">×</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={sendMessage} className="p-3 border-t border-slate-700 flex items-end gap-2">
            <label className="flex items-center gap-2 text-[12px] px-2 py-1 rounded-md bg-slate-800 border border-slate-600 cursor-pointer hover:bg-slate-700 transition">
              <input
                type="file"
                accept="image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                multiple
                onChange={(e) => handleFiles(e.target.files)}
                className="hidden"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-300" viewBox="0 0 20 20" fill="currentColor"><path d="M4 3a2 2 0 00-2 2v10a3 3 0 003 3h8a3 3 0 003-3V7a2 2 0 00-2-2H9.5a1 1 0 010-2H15a4 4 0 014 4v8a5 5 0 01-5 5H5a5 5 0 01-5-5V5a4 4 0 014-4h11.5a1 1 0 010 2H4z" /></svg>
              <span className="text-[12px] text-slate-300">Adjuntar</span>
            </label>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="flex-1 text-[13px] px-3 py-2 rounded-md bg-slate-800 border border-slate-600 focus:outline-none focus:ring-1 focus:ring-emerald-400"
            />
            <button
              type="submit"
              disabled={!canSend}
              className={`text-[13px] px-4 py-2 rounded-md font-semibold transition ${canSend ? "bg-emerald-500 text-slate-900 hover:bg-emerald-400" : "bg-slate-700 text-slate-400 cursor-not-allowed"
                }`}
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </>
  );
}
