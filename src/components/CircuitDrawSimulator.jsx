import React, { useState, useRef } from "react";

const GRID_SIZE = 24;
const NODE_RADIUS = 4;
const VIEWBOX_WIDTH = 900;
const VIEWBOX_HEIGHT = 420;
let nextId = 1;

function dist(a, b) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function snapToGrid(x, y) {
  return {
    x: Math.round(x / GRID_SIZE) * GRID_SIZE,
    y: Math.round(y / GRID_SIZE) * GRID_SIZE,
  };
}

function findNearbyNode(nodes, x, y, tol = 10) {
  const p = { x, y };
  for (const n of nodes) {
    if (dist(n, p) <= tol) return n;
  }
  return null;
}

// coord pant → viewBox
function getSvgCoords(svgEl, evt) {
  const rect = svgEl.getBoundingClientRect();
  const xClient = evt.clientX - rect.left;
  const yClient = evt.clientY - rect.top;
  const scaleX = VIEWBOX_WIDTH / rect.width;
  const scaleY = VIEWBOX_HEIGHT / rect.height;
  return { x: xClient * scaleX, y: yClient * scaleY };
}

/* ------------ Análisis de circuito (igual que antes) ------------ */
function analyzeCircuit(nodes, elements, voltage) {
  if (!nodes.length || !elements.length) {
    return { ok: false, message: "Dibuja al menos una resistencia." };
  }

  const resistors = elements.filter((e) => e.type === "resistor");
  if (!resistors.length) {
    return { ok: false, message: "No hay resistencias en el circuito." };
  }

  const wires = elements.filter((e) => e.type === "wire");
  const sources = elements.filter((e) => e.type === "source");

  const nodeIndex = new Map();
  nodes.forEach((n, i) => nodeIndex.set(n.id, i));

  const parent = nodes.map((_, i) => i);
  const findUF = (i) => (parent[i] === i ? i : (parent[i] = findUF(parent[i])));
  const unite = (a, b) => {
    a = findUF(a);
    b = findUF(b);
    if (a !== b) parent[b] = a;
  };

  for (const w of wires) {
    const i1 = nodeIndex.get(w.n1);
    const i2 = nodeIndex.get(w.n2);
    if (i1 != null && i2 != null) unite(i1, i2);
  }

  const rootToSuper = new Map();
  let superCount = 0;
  const nodeToSuper = new Map();

  nodes.forEach((n) => {
    const idx = nodeIndex.get(n.id);
    const root = findUF(idx);
    if (!rootToSuper.has(root)) rootToSuper.set(root, superCount++);
    nodeToSuper.set(n.id, rootToSuper.get(root));
  });

  if (superCount < 2) {
    return {
      ok: false,
      message:
        "El circuito no tiene al menos dos nodos distintos después de unir los cables.",
    };
  }

  const Redges = [];
  for (const r of resistors) {
    const a = nodeToSuper.get(r.n1);
    const b = nodeToSuper.get(r.n2);
    if (a == null || b == null || a === b) continue;
    const value = Number(r.value) || 0;
    if (value <= 0) continue;
    Redges.push({ a, b, R: value, id: r.id });
  }

  if (!Redges.length) {
    return {
      ok: false,
      message:
        "Las resistencias tienen valor 0 o no conectan nodos distintos.",
    };
  }

  let termPlus = 0;
  let termMinus = 1;
  if (sources.length) {
    const src = sources[0];
    const sA = nodeToSuper.get(src.n1);
    const sB = nodeToSuper.get(src.n2);
    if (sA != null && sB != null && sA !== sB) {
      termPlus = sA;
      termMinus = sB;
    }
  } else {
    let leftNode = nodes[0];
    let rightNode = nodes[0];
    for (const n of nodes) {
      if (n.x < leftNode.x) leftNode = n;
      if (n.x > rightNode.x) rightNode = n;
    }
    termPlus = nodeToSuper.get(leftNode.id);
    termMinus = nodeToSuper.get(rightNode.id);
  }

  const Vsrc = Number(voltage) || 0;
  if (Vsrc <= 0) {
    return {
      ok: false,
      message: "Ingresa un voltaje positivo para calcular la corriente.",
    };
  }

  const superNodes = Array.from(new Set(nodeToSuper.values()));
  const unknown = superNodes.filter(
    (s) => s !== termPlus && s !== termMinus
  );
  const idxUnknown = new Map();
  unknown.forEach((s, i) => idxUnknown.set(s, i));

  const n = unknown.length;
  const A = Array.from({ length: n }, () => Array(n).fill(0));
  const b = Array(n).fill(0);

  const Vknown = (s) => {
    if (s === termPlus) return Vsrc;
    if (s === termMinus) return 0;
    return null;
  };

  for (const e of Redges) {
    const g = 1 / e.R;
    const [i, j] = [e.a, e.b];
    const iU = idxUnknown.get(i);
    const jU = idxUnknown.get(j);
    const ViK = Vknown(i);
    const VjK = Vknown(j);

    if (iU != null && jU != null) {
      A[iU][iU] += g;
      A[jU][jU] += g;
      A[iU][jU] -= g;
      A[jU][iU] -= g;
    } else if (iU != null && VjK != null) {
      A[iU][iU] += g;
      b[iU] += g * VjK;
    } else if (jU != null && ViK != null) {
      A[jU][jU] += g;
      b[jU] += g * ViK;
    } else if (iU != null && jU == null && VjK == null) {
      A[iU][iU] += g;
    } else if (jU != null && iU == null && ViK == null) {
      A[jU][jU] += g;
    }
  }

  const x = Array(n).fill(0);
  if (n > 0) {
    const EPS = 1e-9;
    for (let i = 0; i < n; i++) {
      let maxRow = i;
      for (let k = i + 1; k < n; k++) {
        if (Math.abs(A[k][i]) > Math.abs(A[maxRow][i])) maxRow = k;
      }
      if (Math.abs(A[maxRow][i]) < EPS) continue;
      [A[i], A[maxRow]] = [A[maxRow], A[i]];
      [b[i], b[maxRow]] = [b[maxRow], b[i]];

      const pivot = A[i][i];
      for (let j = i; j < n; j++) A[i][j] /= pivot;
      b[i] /= pivot;

      for (let k = 0; k < n; k++) {
        if (k === i) continue;
        const f = A[k][i];
        for (let j = i; j < n; j++) A[k][j] -= f * A[i][j];
        b[k] -= f * b[i];
      }
    }
    for (let i = 0; i < n; i++) x[i] = b[i];
  }

  const Vnode = new Map();
  superNodes.forEach((s) => {
    const idx = idxUnknown.get(s);
    if (idx != null) Vnode.set(s, x[idx]);
    else Vnode.set(s, Vknown(s) ?? 0);
  });

  let Itotal = 0;
  for (const e of Redges) {
    if (e.a === termPlus || e.b === termPlus) {
      const other = e.a === termPlus ? e.b : e.a;
      const Va = Vnode.get(termPlus);
      const Vb = Vnode.get(other);
      Itotal += (Va - Vb) / e.R;
    }
  }

  const Req = Vsrc / Itotal;

  let tipo = "Mixto";
  const uniqueNodes = new Set();
  Redges.forEach((e) => {
    uniqueNodes.add(e.a);
    uniqueNodes.add(e.b);
  });
  const nodeDeg = {};
  uniqueNodes.forEach((nId) => (nodeDeg[nId] = 0));
  Redges.forEach((e) => {
    nodeDeg[e.a]++;
    nodeDeg[e.b]++;
  });

  const edgesCount = Redges.length;
  const nodesCount = uniqueNodes.size;
  const allBetweenTerminals = Redges.every(
    (e) =>
      (e.a === termPlus && e.b === termMinus) ||
      (e.a === termMinus && e.b === termPlus)
  );

  if (allBetweenTerminals && edgesCount > 1) {
    tipo = "Paralelo simple";
  } else if (
    edgesCount === nodesCount - 1 &&
    nodeDeg[termPlus] === 1 &&
    nodeDeg[termMinus] === 1
  ) {
    tipo = "Serie (camino único)";
  }

  return {
    ok: true,
    message: "",
    Req,
    Itotal,
    Vsrc,
    tipo,
    branchCurrents: Redges.map((e) => {
      const Va = Vnode.get(e.a);
      const Vb = Vnode.get(e.b);
      return { id: e.id, I: (Va - Vb) / e.R, Va, Vb, R: e.R };
    }),
  };
}

/* -------------------- Componente principal -------------------- */

export default function CircuitDrawSimulator({ onBack }) {
  const [tool, setTool] = useState("wire"); // wire | resistor | source | erase
  const [nodes, setNodes] = useState([]);
  const [elements, setElements] = useState([]);
  const [activeNodeId, setActiveNodeId] = useState(null);
  const [hoverNodeId, setHoverNodeId] = useState(null);

  const [voltage, setVoltage] = useState("10");
  const [analysis, setAnalysis] = useState(null);
  const [statusMsg, setStatusMsg] = useState(
    "Selecciona una herramienta, haz clic y arrastra tipo Paint."
  );

  const [isDrawing, setIsDrawing] = useState(false);
  const [drawStart, setDrawStart] = useState(null);
  const [drawCurrent, setDrawCurrent] = useState(null);

  const svgRef = useRef(null);

  /* --------- Eventos tipo Paint --------- */

  const handleMouseDown = (evt) => {
    if (!svgRef.current) return;
    const { x, y } = getSvgCoords(svgRef.current, evt);
    const { x: sx, y: sy } = snapToGrid(x, y);

    // 🧹 borrar
    if (tool === "erase") {
      const p = { x: sx, y: sy };
      const thr = 10;

      setElements((prevEls) => {
        const newEls = prevEls.filter((el) => {
          const n1 = nodes.find((n) => n.id === el.n1);
          const n2 = nodes.find((n) => n.id === el.n2);
          if (!n1 || !n2) return false;
          const minX = Math.min(n1.x, n2.x) - thr;
          const maxX = Math.max(n1.x, n2.x) + thr;
          const minY = Math.min(n1.y, n2.y) - thr;
          const maxY = Math.max(n1.y, n2.y) + thr;
          const hit =
            p.x >= minX && p.x <= maxX && p.y >= minY && p.y <= maxY;
          return !hit;
        });

        // ❌ limpiar nodos huérfanos
        setNodes((prevNodes) => {
          const used = new Set();
          newEls.forEach((el) => {
            used.add(el.n1);
            used.add(el.n2);
          });
          return prevNodes.filter((n) => used.has(n.id));
        });

        return newEls;
      });

      setStatusMsg("Elemento borrado (si había alguno cercano).");
      return;
    }

    // resto de herramientas: empezar tramo
    let node = findNearbyNode(nodes, sx, sy, 8);
    if (!node) {
      node = { id: `n${nextId++}`, x: sx, y: sy };
      setNodes((prev) => [...prev, node]);
    }

    setActiveNodeId(node.id);
    setIsDrawing(true);
    setDrawStart({ x: node.x, y: node.y, nodeId: node.id });
    setDrawCurrent({ x: node.x, y: node.y });
    setStatusMsg("Arrastra para definir el tramo y suelta para fijarlo.");
  };

  const handleMouseMove = (evt) => {
    if (!svgRef.current) return;
    const { x, y } = getSvgCoords(svgRef.current, evt);
    const { x: sx, y: sy } = snapToGrid(x, y);

    const nearNode = findNearbyNode(nodes, sx, sy, 8);
    setHoverNodeId(nearNode ? nearNode.id : null);

    if (isDrawing) {
      setDrawCurrent({ x: sx, y: sy });
    }
  };

  const handleMouseUp = (evt) => {
    if (!isDrawing || !svgRef.current || !drawStart) return;
    const { x, y } = getSvgCoords(svgRef.current, evt);
    const { x: sx, y: sy } = snapToGrid(x, y);

    let endNode = findNearbyNode(nodes, sx, sy, 8);
    if (!endNode) {
      endNode = { id: `n${nextId++}`, x: sx, y: sy };
      setNodes((prev) => [...prev, endNode]);
    }

    if (endNode.id !== drawStart.nodeId) {
      const fromId = drawStart.nodeId;
      const toId = endNode.id;

      if (tool === "wire" || tool === "resistor" || tool === "source") {
        const newEl = {
          id: `e${nextId++}`,
          type: tool,
          n1: fromId,
          n2: toId,
          value:
            tool === "resistor"
              ? 10
              : tool === "source"
              ? Number(voltage) || 10
              : 0,
        };
        setElements((prev) => [...prev, newEl]);
      }
      setStatusMsg("Tramo añadido. Puedes seguir desde el último nodo.");
    } else {
      setStatusMsg("Tramo cancelado.");
    }

    setActiveNodeId(endNode.id);
    setIsDrawing(false);
    setDrawStart(null);
    setDrawCurrent(null);
  };

  const handleAnalyze = () => {
    const res = analyzeCircuit(nodes, elements, Number(voltage) || 0);
    setAnalysis(res);
    if (!res.ok) setStatusMsg(res.message);
    else
      setStatusMsg(
        `R_eq = ${res.Req.toFixed(2)} Ω · I_total = ${res.Itotal.toFixed(
          3
        )} A (${res.tipo})`
      );
  };

  const updateResistorValue = (id, val) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, value: val } : el))
    );
  };

  const resetEditor = () => {
    setNodes([]);
    setElements([]);
    setActiveNodeId(null);
    setHoverNodeId(null);
    setAnalysis(null);
    setIsDrawing(false);
    setDrawStart(null);
    setDrawCurrent(null);
    setStatusMsg("Canvas limpio. Comienza un nuevo circuito.");
  };


  return (
    <div className="rounded-2xl border border-emerald-600/60 bg-slate-950/95 p-4 space-y-4">
      <div className="flex items-center justify-between gap-2">
        <div>
          <h3 className="text-base md:text-lg font-semibold text-emerald-300">
            Editor de circuitos de corriente continua
          </h3>
          <p className="text-[11px] md:text-xs text-gray-300 max-w-3xl">
            Selecciona una herramienta, haz clic y arrastra para dibujar
            tramos rectos. Los puntos amarillos son nodos de unión.
          </p>
        </div>
        {onBack && (
          <button
            onClick={onBack}
            className="text-[11px] md:text-xs px-3 py-1.5 rounded-full border border-slate-600 bg-slate-800 hover:bg-slate-700 text-gray-100"
          >
            ← Volver
          </button>
        )}
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-[11px] md:text-xs">
        <span className="text-gray-300 mr-1">Herramientas:</span>
        {[
          { id: "wire", label: "Cable" },
          { id: "resistor", label: "Resistencia" },
          { id: "source", label: "Fuente DC" },
          { id: "erase", label: "Borrar" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => {
              setTool(t.id);
              setIsDrawing(false);
              setDrawStart(null);
              setDrawCurrent(null);
              setActiveNodeId(null);
            }}
            className={`px-3 py-1 rounded-full border text-xs font-medium ${
              tool === t.id
                ? "bg-emerald-500 text-slate-950 border-emerald-400"
                : "bg-slate-800/80 text-slate-200 border-slate-600 hover:bg-slate-700"
            }`}
          >
            {t.label}
          </button>
        ))}

        <div className="ml-3 flex items-center gap-1">
          <span className="text-gray-300">Voltaje fuente (V):</span>
          <input
            type="number"
            value={voltage}
            onChange={(e) => setVoltage(e.target.value)}
            className="w-16 px-1 py-0.5 rounded-md bg-slate-800 border border-slate-600 text-[11px]"
          />
        </div>

        <button
          onClick={resetEditor}
          className="ml-auto px-3 py-1 rounded-full border border-slate-600 bg-slate-800 hover:bg-slate-700 text-gray-100"
        >
          Limpiar
        </button>
      </div>

      <div className="grid md:grid-cols-[2fr,1fr] gap-4 items-start">
        {/* Canvas */}
        <div className="rounded-xl border border-slate-700 bg-black/95 overflow-hidden">
          <svg
            ref={svgRef}
            viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
            className="w-full h-[420px] cursor-crosshair"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {/* Rejilla */}
            <defs>
              <pattern
                id="smallGrid"
                width={GRID_SIZE}
                height={GRID_SIZE}
                patternUnits="userSpaceOnUse"
              >
                <path
                  d={`M ${GRID_SIZE} 0 L 0 0 0 ${GRID_SIZE}`}
                  fill="none"
                  stroke="#1f2933"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect
              x="0"
              y="0"
              width={VIEWBOX_WIDTH}
              height={VIEWBOX_HEIGHT}
              fill="url(#smallGrid)"
            />

            {/* Elementos definitivos */}
            {elements.map((el) => {
              const n1 = nodes.find((n) => n.id === el.n1);
              const n2 = nodes.find((n) => n.id === el.n2);
              if (!n1 || !n2) return null;

              const midX = (n1.x + n2.x) / 2;
              const midY = (n1.y + n2.y) / 2;

              if (el.type === "wire") {
                return (
                  <line
                    key={el.id}
                    x1={n1.x}
                    y1={n1.y}
                    x2={n2.x}
                    y2={n2.y}
                    stroke="#22c1dc"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                );
              }

              if (el.type === "resistor") {
                const isHorizontal =
                  Math.abs(n1.y - n2.y) < Math.abs(n1.x - n2.x);
                const zig = [];
                const steps = 6;
                for (let i = 0; i <= steps; i++) {
                  const t = i / steps;
                  const x = n1.x + (n2.x - n1.x) * t;
                  const y = n1.y + (n2.y - n1.y) * t;
                  const off = (i % 2 === 0 ? -1 : 1) * 6;
                  if (i !== 0 && i !== steps) {
                    zig.push(
                      isHorizontal
                        ? `${x},${y + off}`
                        : `${x + off},${y}`
                    );
                  } else {
                    zig.push(`${x},${y}`);
                  }
                }
                return (
                  <g key={el.id}>
                    <polyline
                      points={zig.join(" ")}
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <text
                      x={midX}
                      y={midY - 10}
                      fontSize="11"
                      fill="#facc15"
                      textAnchor="middle"
                    >
                      {el.value} Ω
                    </text>
                  </g>
                );
              }

              if (el.type === "source") {
                // batería
                const isHorizontal =
                  Math.abs(n1.y - n2.y) < Math.abs(n1.x - n2.x);
                const plateSpacing = 14;
                const longLen = 26;
                const shortLen = 14;

                if (isHorizontal) {
                  return (
                    <g key={el.id}>
                      {}
                      <line
                        x1={n1.x}
                        y1={n1.y}
                        x2={midX - plateSpacing}
                        y2={midY}
                        stroke="#22c1dc"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <line
                        x1={midX + plateSpacing}
                        y1={midY}
                        x2={n2.x}
                        y2={n2.y}
                        stroke="#22c1dc"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {}
                      <line
                        x1={midX - plateSpacing / 2}
                        y1={midY - longLen / 2}
                        x2={midX - plateSpacing / 2}
                        y2={midY + longLen / 2}
                        stroke="#e5e7eb"
                        strokeWidth="3"
                      />
                      {}
                      <line
                        x1={midX + plateSpacing / 2}
                        y1={midY - shortLen / 2}
                        x2={midX + plateSpacing / 2}
                        y2={midY + shortLen / 2}
                        stroke="#9ca3af"
                        strokeWidth="2.5"
                      />
                      <text
                        x={midX}
                        y={midY - longLen / 2 - 8}
                        fontSize="11"
                        fill="#4ade80"
                        textAnchor="middle"
                      >
                        {el.value} V
                      </text>
                    </g>
                  );
                } else {
                  return (
                    <g key={el.id}>
                      {/* cables */}
                      <line
                        x1={n1.x}
                        y1={n1.y}
                        x2={n1.x}
                        y2={midY - plateSpacing}
                        stroke="#22c1dc"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <line
                        x1={n2.x}
                        y1={midY + plateSpacing}
                        x2={n2.x}
                        y2={n2.y}
                        stroke="#22c1dc"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      {}
                      <line
                        x1={midX - longLen / 2}
                        y1={midY - plateSpacing / 2}
                        x2={midX + longLen / 2}
                        y2={midY - plateSpacing / 2}
                        stroke="#e5e7eb"
                        strokeWidth="3"
                      />
                      {}
                      <line
                        x1={midX - shortLen / 2}
                        y1={midY + plateSpacing / 2}
                        x2={midX + shortLen / 2}
                        y2={midY + plateSpacing / 2}
                        stroke="#9ca3af"
                        strokeWidth="2.5"
                      />
                      <text
                        x={midX + longLen / 2 + 6}
                        y={midY + 4}
                        fontSize="11"
                        fill="#4ade80"
                      >
                        {el.value} V
                      </text>
                    </g>
                  );
                }
              }

              return null;
            })}

            {}
            {isDrawing && drawStart && drawCurrent && tool !== "erase" && (
              <line
                x1={drawStart.x}
                y1={drawStart.y}
                x2={drawCurrent.x}
                y2={drawCurrent.y}
                stroke="#4ade80"
                strokeWidth="3"
                strokeDasharray="6 4"
                strokeLinecap="round"
                opacity="0.8"
              />
            )}

            {}
            {nodes.map((n) => (
              <circle
                key={n.id}
                cx={n.x}
                cy={n.y}
                r={
                  n.id === hoverNodeId || n.id === activeNodeId
                    ? NODE_RADIUS + 1
                    : NODE_RADIUS
                }
                fill={n.id === activeNodeId ? "#f97316" : "#facc15"}
                stroke="#111827"
                strokeWidth="1"
                opacity={
                  n.id === hoverNodeId || n.id === activeNodeId ? 1 : 0.7
                }
              />
            ))}
          </svg>
        </div>

        {}
        <div className="rounded-xl border border-slate-700 bg-slate-900/90 p-3 space-y-3 text-[11px] md:text-xs text-gray-200">
          <h4 className="font-semibold text-gray-100">
            Parámetros y resultados
          </h4>

          <div className="space-y-1">
            <p className="text-gray-300">
              1. Dibuja el circuito como en Paint: clic y arrastra.
            </p>
            <p className="text-gray-300">
              2. Ajusta los valores de las resistencias.
            </p>
            <p className="text-gray-300">
              3. Haz clic en{" "}
              <span className="font-semibold">
                “Calcular R_eq e intensidades”
              </span>
              .
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="font-semibold text-gray-100">
              Resistencias del circuito
            </h5>
            {elements.filter((e) => e.type === "resistor").length === 0 && (
              <p className="text-gray-400">
                No hay resistencias aún. Selecciona “Resistencia” y dibuja entre
                dos puntos.
              </p>
            )}
            <div className="space-y-1 max-h-40 overflow-y-auto pr-1">
              {elements
                .filter((e) => e.type === "resistor")
                .map((r, idx) => (
                  <div
                    key={r.id}
                    className="flex items-center gap-2 border border-slate-700 rounded-lg px-2 py-1"
                  >
                    <span className="text-gray-300">R{idx + 1}:</span>
                    <input
                      type="number"
                      value={r.value}
                      onChange={(e) =>
                        updateResistorValue(
                          r.id,
                          Number(e.target.value) || 0
                        )
                      }
                      className="w-16 px-1 py-0.5 rounded-md bg-slate-800 border border-slate-600 text-[11px]"
                    />
                    <span className="text-gray-400">Ω</span>
                    <button
                      onClick={() =>
                        setElements((prev) =>
                          prev.filter((el) => el.id !== r.id)
                        )
                      }
                      className="ml-auto px-2 py-0.5 rounded-full border border-red-500/60 text-red-300 hover:bg-red-500/10 text-[10px]"
                    >
                      ✕
                    </button>
                  </div>
                ))}
            </div>
          </div>

          <button
            onClick={handleAnalyze}
            className="w-full mt-1 px-4 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs"
          >
            Calcular R_eq e intensidades
          </button>

          <div className="mt-2 space-y-1">
            <h5 className="font-semibold text-gray-100">Resultados</h5>
            {!analysis ? (
              <p className="text-gray-400">
                Aún no se ha realizado el cálculo.
              </p>
            ) : !analysis.ok ? (
              <p className="text-red-400">{analysis.message}</p>
            ) : (
              <>
                <p>
                  <span className="font-semibold">R_eq:</span>{" "}
                  {analysis.Req.toFixed(2)} Ω
                </p>
                <p>
                  <span className="font-semibold">I_total:</span>{" "}
                  {analysis.Itotal.toFixed(3)} A
                </p>
                <p>
                  <span className="font-semibold">
                    Tipo de conexión (aprox.):
                  </span>{" "}
                  {analysis.tipo}
                </p>
                {analysis.branchCurrents.length > 1 && (
                  <div className="mt-1">
                    <p className="font-semibold text-gray-100">
                      Corrientes por resistencia
                    </p>
                    <ul className="list-disc list-inside space-y-0.5">
                      {analysis.branchCurrents.map((br, i) => (
                        <li key={br.id}>
                          R{i + 1}: {br.I.toFixed(3)} A
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="mt-2 text-[11px] text-gray-400 border-t border-slate-700 pt-2">
            <span className="font-semibold text-sky-300">Estado:</span>{" "}
            {statusMsg}
          </div>
        </div>
      </div>
    </div>
  );
}
