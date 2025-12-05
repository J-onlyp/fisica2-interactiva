import React, { useState, useEffect, useRef } from "react";

import Coulomb3DScene from "./Coulomb3DScene";
import Field3DScene from "./Field3DScene";
import CircuitDrawSimulator from "./CircuitDrawSimulator";

const K = 8.99e9; // N·m²/C²

function parseValorCientifico(input) {
  if (!input) return NaN;

  let s = input.trim().toLowerCase();

  // Cambiar coma por punto (para formato español)
  s = s.replace(",", ".");

  // Unificar símbolo de multiplicación
  s = s.replace(/×/g, "x");

  // Caso tipo "a x 10^-b" o "a*10^-b"
  const match = s.match(
    /^([+-]?\d+(\.\d+)?)(\s*[x*]\s*10\s*\^?\s*([+-]?\d+))$/
  );
  if (match) {
    const coef = parseFloat(match[1]);
    const exp = parseInt(match[4], 10);
    if (isNaN(coef) || isNaN(exp)) return NaN;
    return coef * Math.pow(10, exp);
  }

  // Caso normal: número entendido por JS (incluye 2.5e-8)
  const num = Number(s);
  if (!isNaN(num)) return num;

  return NaN;
}

// Formatea a "entero" conservando decimales cuando el exponente es negativo
function formatFullDecimal(val) {
  if (!isFinite(val) || val === 0) return "0";
  const abs = Math.abs(val);
  // Para magnitudes >= 1 usamos locale con hasta 6 decimales
  if (abs >= 1) return val.toLocaleString("en-US", { maximumFractionDigits: 6 });

  // Para magnitudes < 1 expandimos completamente a partir de notación científica
  // Usamos 12 cifras significativas para evitar ruido excesivo de coma flotante
  const expStr = val.toExponential(12);
  const [coefStr, eStr] = expStr.split("e");
  const exp = parseInt(eStr, 10);
  // coefStr está normalizado con 1 dígito entero: d.dddd
  const sign = val < 0 ? "-" : "";
  const digits = coefStr.replace(".", "").replace(/^-/, ""); // solo dígitos
  const intLen = 1; // por normalización
  const shift = exp; // mover punto desde después del primer dígito
  let idx = intLen + shift;

  if (idx <= 0) {
    // 0.00.. + dígitos
    const zeros = "0".repeat(-idx);
    return `${sign}0.${zeros}${digits}`.replace(/\.?0+$/, (m) => m); // no recortar ceros
  }
  if (idx >= digits.length) {
    // dígitos + ceros
    const zeros = "0".repeat(idx - digits.length);
    return sign + digits + zeros;
  }
  // insertar punto dentro de digits
  const intPart = digits.slice(0, idx);
  const fracPart = digits.slice(idx);
  // No eliminar ceros de la fracción: mostrar todos los que aporta la precisión
  return `${sign}${intPart}.${fracPart}`;
}

// =======================
// 2.1 Ley de Coulomb
// =======================

function CoulombSimulator() {
  const [q1, setQ1] = useState(""); // C
  const [q2, setQ2] = useState(""); // C
  const [r, setR] = useState("");   // m
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");
  const [mostrarEntero, setMostrarEntero] = useState(false);

  // Estado derivado en vivo para sincronizar vistas 2D/3D
  const q1NumLive = parseValorCientifico(q1);
  const q2NumLive = parseValorCientifico(q2);
  const rNumLive = parseValorCientifico(r);
  const hasInputs = ![q1NumLive, q2NumLive, rNumLive].some((v) => isNaN(v)) && rNumLive > 0;
  const signLive = hasInputs ? Math.sign(q1NumLive * q2NumLive) : 0; // +1 repulsión, -1 atracción, 0 indef.
  const FLive = hasInputs ? (K * Math.abs(q1NumLive * q2NumLive)) / (rNumLive * rNumLive) : 0;
  const intensityLive = hasInputs && FLive > 0 ? Math.min(1, Math.log10(1 + FLive) / 6) : 0.3;

  // Refs para insertar notación científica y enfocar
  const q1Ref = useRef(null);
  const q2Ref = useRef(null);
  const rRef = useRef(null);

  const insertSci = (val, setter, ref) => {
    const has = /10\s*\^/i.test(val || "");
    const base = val || "";
    const newVal = has ? base : (base.trim() ? base + " × 10^" : "1 × 10^");
    setter(newVal);
    // Coloca el cursor al final para que el usuario escriba el exponente
    requestAnimationFrame(() => {
      if (ref && ref.current) {
        try {
          const pos = newVal.length;
          ref.current.focus();
          ref.current.setSelectionRange(pos, pos);
        } catch (e) {
          ref.current.focus();
        }
      }
    });
  };

  const calcular = () => {
    setError("");

    const q1Num = parseValorCientifico(q1);
    const q2Num = parseValorCientifico(q2);
    const rNum = parseValorCientifico(r);

    if ([q1Num, q2Num, rNum].some((v) => isNaN(v))) {
      setError(
        "Ingresa valores válidos. Ejemplos: 4e-6, 4 x 10^-6, 0.000004"
      );
      setResultado(null);
      return;
    }
    if (rNum <= 0) {
      setError("La distancia r debe ser mayor que 0.");
      setResultado(null);
      return;
    }

    const q1C = q1Num;
    const q2C = q2Num;

    const F = (K * Math.abs(q1C * q2C)) / (rNum * rNum);
    const tipo =
      q1C * q2C > 0
        ? "Repulsión (cargas del mismo signo)"
        : "Atracción (cargas de signo opuesto)";

    setResultado({
      F,
      tipo,
      q1C,
      q2C,
      r: rNum,
    });
  };

  const intensidad =
    resultado && resultado.F > 0
      ? Math.min(1, Math.log10(1 + resultado.F) / 6)
      : 0.3;

  // Notación científica bonita
  const partes = resultado ? resultado.F.toExponential(3).split("e") : null;
  const coef = partes ? partes[0] : "";
  const exp = partes ? parseInt(partes[1], 10) : 0;

  // Valor entero/decimal grande
  const entero = resultado ? formatFullDecimal(resultado.F) : "";

  return (
    <div className="rounded-3xl p-6 space-y-5 shadow-lg border border-slate-200 dark:border-slate-600 bg-slate-50/75 dark:bg-slate-800/75">
      <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">
        2.1 Ley de Coulomb – Fuerza eléctrica
      </h3>

      <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
        Calcula la fuerza eléctrica entre dos cargas puntuales:
        <span className="block mt-1 italic">
          F = k · |q₁ q₂| / r²
        </span>
      </p>

      {/* entrada y resultado */}
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-3 text-sm">
          <div className="grid grid-cols-2 gap-2">
            <label className="flex flex-col">
              <span>q₁ (C)</span>
              <div className="flex items-center gap-1">
                <input
                  ref={q1Ref}
                  type="text"
                  value={q1}
                  onChange={(e) => setQ1(e.target.value)}
                  placeholder="Ej: 4e-6"
                  className="px-3 py-2 rounded-lg bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-sm w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="button"
                  onClick={() => insertSci(q1, setQ1, q1Ref)}
                  className="px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-600 bg-white/90 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs text-slate-800 dark:text-gray-200 whitespace-nowrap"
                  title="Insertar ×10^"
                >
                  ×10^
                </button>
              </div>
            </label>
            <label className="flex flex-col">
              <span>q₂ (C)</span>
              <div className="flex items-center gap-1">
                <input
                  ref={q2Ref}
                  type="text"
                  value={q2}
                  onChange={(e) => setQ2(e.target.value)}
                  placeholder="Ej: -8e-6"
                  className="px-3 py-2 rounded-lg bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-sm w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="button"
                  onClick={() => insertSci(q2, setQ2, q2Ref)}
                  className="px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-600 bg-white/90 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs text-slate-800 dark:text-gray-200 whitespace-nowrap"
                  title="Insertar ×10^"
                >
                  ×10^
                </button>
              </div>
            </label>
            <label className="flex flex-col col-span-2">
              <span>r (m)</span>
              <div className="flex items-center gap-1">
                <input
                  ref={rRef}
                  type="text"
                  value={r}
                  onChange={(e) => setR(e.target.value)}
                  placeholder="Ej: 4e-3"
                  className="px-3 py-2 rounded-lg bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-sm w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="button"
                  onClick={() => insertSci(r, setR, rRef)}
                  className="px-2 py-1 rounded-md border border-slate-600 bg-slate-800 hover:bg-slate-700 text-[10px] text-gray-200 whitespace-nowrap"
                  title="Insertar ×10^"
                >
                  ×10^
                </button>
              </div>
            </label>
          </div>

          <button
            onClick={calcular}
            className="mt-3 w-full md:w-auto px-5 py-2 rounded-lg bg-primary hover:bg-primary-dark text-sm font-semibold shadow-sm"
          >
            Calcular F
          </button>

          {error && <p className="text-xs text-red-400 mt-1">{error}</p>}

            {resultado && (
            <div className="mt-4 text-sm bg-slate-50/75 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 rounded-2xl p-4 shadow-inner space-y-3">
              <p className="flex items-center gap-1">
                <span className="font-semibold">F ≈</span>
                {!mostrarEntero ? (
                  <>
                    {coef} × 10<sup>{exp}</sup> N
                  </>
                ) : (
                  <>{entero} N</>
                )}
              </p>

              <button
                onClick={() => setMostrarEntero(!mostrarEntero)}
                className="px-3 py-1 rounded-md bg-sky-600 hover:bg-sky-500 text-white text-sm"
              >
                Cambiar a {mostrarEntero ? "notación científica" : "entero"}
              </button>

              <p>
                <span className="font-semibold">Tipo:</span> {resultado.tipo}
              </p>
              <p className="text-[11px] text-gray-400">
                q₁ = {resultado.q1C.toExponential(3)} C · q₂ ={" "}
                {resultado.q2C.toExponential(3)} C · r = {resultado.r} m
              </p>
            </div>
          )}
        </div>

        <div className="text-[11px] md:text-xs text-gray-400 space-y-1">
          <p>
            • Si q₁ y q₂ tienen el mismo signo ⇒ la fuerza es de{" "}
            <span className="text-amber-300 font-semibold">repulsión</span>.
          </p>
          <p>
            • Si tienen signos opuestos ⇒ la fuerza es de{" "}
            <span className="text-sky-300 font-semibold">atracción</span>.
          </p>
          <p>
            • Al duplicar la distancia r, la fuerza se reduce a la cuarta parte
            (depende de 1 / r²).
          </p>
        </div>
      </div>

      {/* visualización 2D y 3D */}
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        <div className="rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-600 dark:border-slate-600 p-4 flex flex-col shadow-inner">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300">
              Visualización 2D
            </span>
            {resultado && (
              <span className="text-[11px] text-amber-300 font-semibold">
                {resultado.q1C * resultado.q2C > 0 ? "Repulsión" : "Atracción"}
              </span>
            )}
          </div>

          <div className="flex-1 relative flex items-center justify-center">
            {/* Flechas 2D según atracción/repulsión */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {(() => {
                const alpha = 0.4 + (intensityLive || 0) * 0.6;
                const len = 80 + (intensityLive || 0) * 60; // largo base
                const color = signLive < 0 ? "#4ade80" : "#fbbf24"; // atracción/repulsión
                const common = {
                  height: 2,
                  opacity: alpha,
                  background: `linear-gradient(90deg, ${color}, ${color})`,
                };
                if (signLive === 0) return null;
                return (
                  <>
                    {/* flecha izquierda */}
                    <div
                      style={{
                        position: "absolute",
                        width: len,
                        left: `calc(50% - ${len / 2 + 8}px)`,
                        top: "50%",
                        transform: "translateY(-50%)",
                        ...common,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: `calc(50% - ${len / 2 + 12}px)`,
                        top: "50%",
                        transform: signLive > 0 ? "translateY(-50%) rotate(180deg)" : "translateY(-50%)",
                        borderTop: "6px solid transparent",
                        borderBottom: "6px solid transparent",
                        borderLeft: `10px solid ${color}`,
                        opacity: alpha,
                      }}
                    />
                    {/* flecha derecha */}
                    <div
                      style={{
                        position: "absolute",
                        width: len,
                        right: `calc(50% - ${len / 2 + 8}px)`,
                        top: "50%",
                        transform: "translateY(-50%)",
                        ...common,
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        right: `calc(50% - ${len / 2 + 12}px)`,
                        top: "50%",
                        transform: signLive > 0 ? "translateY(-50%)" : "translateY(-50%) rotate(180deg)",
                        borderTop: "6px solid transparent",
                        borderBottom: "6px solid transparent",
                        borderLeft: `10px solid ${color}`,
                        opacity: alpha,
                      }}
                    />
                  </>
                );
              })()}
            </div>
            <div className="absolute left-6 flex flex-col items-center gap-1">
              <div className={`h-10 w-10 rounded-full ${q1NumLive < 0 ? "bg-blue-500" : "bg-red-500"} flex items-center justify-center text-xs font-bold`}>
                {isNaN(q1NumLive) ? "?" : (q1NumLive < 0 ? "−" : "+")}
              </div>
              <div className="text-[10px] text-gray-300">
                q₁ = {q1 || "—"} C
              </div>
            </div>

            <div className="absolute right-6 flex flex-col items-center gap-1">
              <div className={`h-10 w-10 rounded-full ${q2NumLive < 0 ? "bg-blue-500" : "bg-red-500"} flex items-center justify-center text-xs font-bold`}>
                {isNaN(q2NumLive) ? "?" : (q2NumLive < 0 ? "−" : "+")}
              </div>
              <div className="text-[10px] text-gray-300">
                q₂ = {q2 || "—"} C
              </div>
            </div>

            <div className="h-0.5 w-32 bg-gradient-to-r from-red-400 via-amber-300 to-blue-400" />
            <div className="absolute bottom-3 text-[11px] text-gray-300">
              Representación 2D del vector de fuerza.
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-600 dark:border-slate-600 p-4 flex flex-col shadow-inner">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300">
              Simulación 3D
            </span>
            {resultado && (
              <span className="text-[10px] text-gray-400">
                Intensidad ~ {intensidad.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex-1">
            <Coulomb3DScene
              minHeight={260}
              intensity={intensityLive}
              mode={signLive < 0 ? "attract" : signLive > 0 ? "repel" : "none"}
              q1Sign={isNaN(q1NumLive) ? 1 : (q1NumLive >= 0 ? 1 : -1)}
              q2Sign={isNaN(q2NumLive) ? 1 : (q2NumLive >= 0 ? 1 : -1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// =======================
// 2.2 Campo eléctrico
// =======================

function CampoElectricSimulator() {
  const [q, setQ] = useState(""); // C
  const [r, setR] = useState(""); // m
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");
  const [mostrarEntero, setMostrarEntero] = useState(false);

  const qRef = React.useRef(null);
  const rRef = React.useRef(null);

  const insertSci = (val, setter, ref) => {
    const has = /10\s*\^/i.test(val || "");
    const base = val || "";
    const newVal = has ? base : (base.trim() ? base + " × 10^" : "1 × 10^");
    setter(newVal);
    requestAnimationFrame(() => {
      if (ref && ref.current) {
        try {
          const pos = newVal.length;
          ref.current.focus();
          ref.current.setSelectionRange(pos, pos);
        } catch (e) {
          ref.current.focus();
        }
      }
    });
  };

  const calcular = () => {
    setError("");

    const qNum = parseValorCientifico(q);
    const rNum = parseValorCientifico(r);

    if ([qNum, rNum].some((v) => isNaN(v))) {
      setError(
        "Ingresa valores válidos. Ejemplos: 5e-9, 0.000000005, 5 x 10^-9"
      );
      setResultado(null);
      return;
    }
    if (rNum <= 0) {
      setError("La distancia r debe ser mayor que 0.");
      setResultado(null);
      return;
    }

    const qC = qNum; // en C
    const E = (K * Math.abs(qC)) / (rNum * rNum); // N/C

    const direccion =
      qC > 0
        ? "Sale radialmente hacia afuera (carga positiva)"
        : qC < 0
        ? "Entra radialmente hacia la carga (carga negativa)"
        : "No hay campo eléctrico (q = 0)";

    setResultado({
      E,
      qC,
      r: rNum,
      direccion,
    });
  };

  const intensidad =
    resultado && resultado.E > 0
      ? Math.min(1, Math.log10(1 + resultado.E) / 10)
      : 0.3;

  const campoPartes = resultado ? resultado.E.toExponential(3).split("e") : null;
  const campoCoef = campoPartes ? campoPartes[0] : "";
  const campoPow = campoPartes ? parseInt(campoPartes[1], 10) : 0;
  const campoNorm = resultado ? (Math.abs(resultado.E) < 1 ? formatFullDecimal(resultado.E) : resultado.E.toLocaleString("en-US", { maximumFractionDigits: 6 })) : "";

  return (
    <div className="rounded-3xl p-6 space-y-5 shadow-lg border border-slate-200 dark:border-slate-600 bg-slate-50/75 dark:bg-slate-800/75">
      <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">
        2.2 Campo eléctrico de una carga puntual
      </h3>

      <p className="text-xs md:text-sm text-slate-700 dark:text-slate-200">
        El campo eléctrico generado por una carga puntual se define como:
        <span className="block mt-1 italic">
          E = k · |q| / r²
        </span>
        donde <span className="font-semibold">E</span> se mide en N/C,
        <span className="font-semibold"> q</span> es la carga (en C) y
        <span className="font-semibold"> r</span> la distancia al punto de estudio.
      </p>

      <div className="grid md:grid-cols-2 gap-4 items-start">
        <div className="space-y-2 text-xs md:text-sm">
          <div className="grid grid-cols-2 gap-2">
            <label className="flex flex-col col-span-2">
              <span>q (C)</span>
              <div className="flex items-center gap-1">
                <input
                  ref={qRef}
                  type="text"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Ej: 5e-9 o 5 x 10^-9"
                  className="px-3 py-2 rounded-lg bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-sm w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="button"
                  onClick={() => insertSci(q, setQ, qRef)}
                  className="px-2 py-1 rounded-md border border-slate-600 bg-slate-800 hover:bg-slate-700 text-[10px] text-gray-200 whitespace-nowrap"
                >
                  ×10^
                </button>
              </div>
            </label>
            <label className="flex flex-col col-span-2">
              <span>r (m)</span>
              <div className="flex items-center gap-1">
                <input
                  ref={rRef}
                  type="text"
                  value={r}
                  onChange={(e) => setR(e.target.value)}
                  placeholder="Ej: 0.3 o 30e-2"
                  className="px-3 py-2 rounded-lg bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-sm w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="button"
                  onClick={() => insertSci(r, setR, rRef)}
                  className="px-2 py-1 rounded-md border border-slate-600 bg-slate-800 hover:bg-slate-700 text-[10px] text-gray-200 whitespace-nowrap"
                >
                  ×10^
                </button>
              </div>
            </label>
          </div>

          <button
            onClick={calcular}
            className="mt-2 w-full md:w-auto px-4 py-1.5 rounded-full bg-primary hover:bg-primary-dark text-xs font-semibold"
          >
            Calcular E
          </button>

          {error && <p className="text-xs text-red-400 mt-1">{error}</p>}

          {resultado && (
            <div className="mt-2 text-xs md:text-sm bg-slate-50/75 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 rounded-2xl p-4 space-y-2">
              <p className="flex items-center gap-1">
                <span className="font-semibold">Campo eléctrico:</span>
                {!mostrarEntero ? (
                  <>
                    {campoCoef} × 10<sup>{campoPow}</sup> N/C
                  </>
                ) : (
                  <>
                    {campoNorm} N/C
                  </>
                )}
              </p>
              <button
                onClick={() => setMostrarEntero(!mostrarEntero)}
                className="px-3 py-1 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-[10px]"
              >
                Cambiar a {mostrarEntero ? "notación científica" : "entero"}
              </button>
              <p>
                <span className="font-semibold">Dirección:</span>{" "}
                {resultado.direccion}
              </p>
              <p className="text-[11px] text-gray-400">
                q = {resultado.qC.toExponential(3)} C · r = {resultado.r} m
              </p>
            </div>
          )}
        </div>

        <div className="text-[11px] md:text-xs text-gray-400 space-y-1">
          <p>
            • El campo eléctrico es una magnitud vectorial: tiene módulo,
            dirección y sentido.
          </p>
          <p>
            • Cerca de la carga, el campo es más intenso; al aumentar la
            distancia r, el valor de E disminuye con 1 / r².
          </p>
          <p>
            • Convencionalmente se define respecto a una carga de prueba
            positiva.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 items-stretch">
        <div className="rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-600 dark:border-slate-600 p-4 flex flex-col shadow-inner">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300">
              Visualización 2D
            </span>
            {resultado && (
              <span className="text-[11px] text-amber-300 font-semibold">
                {resultado.qC >= 0 ? "Carga positiva" : "Carga negativa"}
              </span>
            )}
          </div>

            <div className="flex-1 relative flex items-center justify-center min-h-[12rem]">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`h-12 w-12 rounded-full flex items-center justify-center text-sm font-bold ${
                  resultado && resultado.qC < 0
                    ? "bg-blue-500"
                    : "bg-red-500"
                }`}
              >
                {resultado && resultado.qC < 0 ? "−" : "+"}
              </div>
              <div className="text-[10px] text-gray-300">
                q = {q || "—"} C
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative h-24 w-24">
                {[...Array(8)].map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const sign = resultado && resultado.qC < 0 ? -1 : 1;

                  return (
                    <div
                      key={i}
                      className="absolute h-[2px] w-8 bg-gradient-to-r from-amber-300 to-amber-500 origin-left"
                      style={{
                        left: "36px",
                        top: "36px",
                        transform: `rotate(${
                          (angle * 180) / Math.PI + (sign > 0 ? 0 : 180)
                        }deg)`,
                        opacity: 0.8,
                      }}
                    />
                  );
                })}
              </div>
            </div>

            <div className="absolute bottom-3 text-[11px] text-gray-300">
              Líneas de campo eléctrico de una carga puntual.
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-600 dark:border-slate-600 p-4 flex flex-col shadow-inner">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300">
              Simulación 3D
            </span>
            {resultado && (
              <span className="text-[10px] text-gray-400">
                Intensidad ~ {intensidad.toFixed(2)}
              </span>
            )}
          </div>
          <div className="flex-1">
            <Field3DScene
              minHeight={260}
              intensity={intensidad}
              isNegative={resultado && resultado.qC < 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// =======================
// 2.3 Corriente y Ley de Ohm
// =======================

function OhmSimulator() {
  const [showCircuitDraw, setShowCircuitDraw] = useState(false);

  const [V, setV] = useState("5");
  const [R, setR] = useState("10");
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const calcular = () => {
    setError("");

    const Vnum = parseFloat(V);
    const Rnum = parseFloat(R);

    if ([Vnum, Rnum].some((v) => isNaN(v))) {
      setError("Ingresa valores numéricos válidos.");
      setResultado(null);
      return;
    }
    if (Rnum <= 0) {
      setError("La resistencia R debe ser mayor que 0.");
      setResultado(null);
      return;
    }

    const I = Vnum / Rnum; // A
    const P = Vnum * I;    // W

    let nivel;
    if (I < 0.2) nivel = "Corriente baja";
    else if (I < 1) nivel = "Corriente moderada";
    else nivel = "Corriente alta";

    setResultado({
      V: Vnum,
      R: Rnum,
      I,
      P,
      nivel,
    });
  };

  if (showCircuitDraw) {
    return (
      <CircuitDrawSimulator onBack={() => setShowCircuitDraw(false)} />
    );
  }

  const intensidad =
    resultado && resultado.I >= 0
      ? Math.min(1, Math.log10(1 + Math.abs(resultado.I)) / 2)
      : 0.2;

  const anchoBarra = 25 + intensidad * 65;
  const colorBarra =
    resultado && resultado.I >= 1
      ? "bg-red-500"
      : resultado && resultado.I >= 0.2
      ? "bg-amber-400"
      : "bg-sky-400";

  return (
    <div className="rounded-3xl p-6 space-y-5 shadow-lg border border-slate-200 dark:border-slate-600 bg-slate-50/75 dark:bg-slate-800/75">
      <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">
        2.3 Corriente y Ley de Ohm
      </h3>

      <p className="text-xs md:text-sm text-slate-700 dark:text-slate-200">
        La Ley de Ohm relaciona el voltaje, la corriente y la resistencia:
        <span className="block mt-1 italic">
          V = I · R &nbsp;&nbsp;⇔&nbsp;&nbsp; I = V / R
        </span>
        donde <span className="font-semibold">V</span> está en voltios (V),
        <span className="font-semibold"> I</span> en amperios (A) y
        <span className="font-semibold"> R</span> en ohmios (Ω).
      </p>

      <div className="grid md:grid-cols-2 gap-4 items-start">
        <div className="space-y-2 text-xs md:text-sm">
          <div className="grid grid-cols-2 gap-2">
            <label className="flex flex-col col-span-2">
              <span>Voltaje V (voltios)</span>
              <input
                type="number"
                value={V}
                onChange={(e) => setV(e.target.value)}
                className="px-3 py-2 rounded-lg bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-sm w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </label>
            <label className="flex flex-col col-span-2">
              <span>Resistencia R (Ω)</span>
              <input
                type="number"
                value={R}
                onChange={(e) => setR(e.target.value)}
                className="px-3 py-2 rounded-lg bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-sm w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </label>
          </div>

          <button
            onClick={calcular}
            className="mt-2 w-full md:w-auto px-4 py-1.5 rounded-full bg-primary hover:bg-primary-dark text-xs font-semibold"
          >
            Calcular
          </button>

          {error && <p className="text-xs text-red-400 mt-1">{error}</p>}

          {resultado && (
            <div className="mt-2 text-xs md:text-sm bg-slate-50/75 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 rounded-2xl p-4 space-y-2">
              <p>
                <span className="font-semibold">Corriente I:</span>{" "}
                {resultado.I.toFixed(3)} A
              </p>
              <p>
                <span className="font-semibold">Potencia P:</span>{" "}
                {resultado.P.toFixed(2)} W
              </p>
              <p>
                <span className="font-semibold">Nivel:</span>{" "}
                {resultado.nivel}
              </p>
              <p className="text-[11px] text-gray-400">
                V = {resultado.V} V · R = {resultado.R} Ω
              </p>
            </div>
          )}
        </div>

        <div className="text-[11px] md:text-xs text-gray-400 space-y-1">
          <p>
            • Si aumentas el voltaje V manteniendo R constante, la corriente I
            aumenta proporcionalmente.
          </p>
          <p>
            • Si aumentas la resistencia R manteniendo V constante, la corriente
            disminuye.
          </p>
          <p>
            • La potencia disipada en la resistencia es P = V · I = I² · R.
          </p>
        </div>
      </div>

      <div className="rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-600 dark:border-slate-600 p-4 flex flex-col gap-3 shadow-inner">
        <div className="flex items-center justify-between">
          <span className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300">
            Visualización 2D
          </span>
          {resultado && (
            <span className="text-[11px] text-amber-300 font-semibold">
              {resultado.nivel}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-3 text-[11px] md:text-xs">
          <div className="relative w-full h-24 flex items-center justify-center">
            <div className="absolute left-6 flex flex-col items-center gap-1">
              <div className="h-10 w-6 rounded-md bg-slate-800 border border-slate-500 flex flex-col justify-center">
                <div className="h-1.5 w-4 bg-slate-200 mx-auto mb-1" />
                <div className="h-0.5 w-3 bg-slate-500 mx-auto" />
              </div>
              <span className="text-[10px] text-gray-300">
                Fuente ({V} V)
              </span>
            </div>

            <div className="absolute right-6 flex flex-col items-center gap-1">
              <div className="h-4 w-10 bg-slate-300 rounded-sm" />
              <span className="text-[10px] text-gray-300">
                R = {R} Ω
              </span>
            </div>

            <div className="absolute top-6 left-10 right-10 h-0.5 bg-slate-600" />
            <div className="absolute bottom-6 left-10 right-10 h-0.5 bg-slate-600" />

            <div className="absolute inset-x-16 top-[22px] h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className={`h-full ${colorBarra} transition-all duration-500`}
                style={{ width: `${anchoBarra}%` }}
              />
            </div>

            <div className="absolute top-[19px] right-[52px] w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-slate-100" />
          </div>

          <p className="text-gray-300">
            La anchura y el color de la barra representan la intensidad de la
            corriente: valores pequeños en azul, moderados en amarillo y altos
            en rojo.
          </p>
        </div>
      </div>

      <div className="pt-4 border-t border-slate-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p className="text-sm md:text-sm text-gray-400 max-w-lg leading-relaxed">
          ¿Quieres diseñar tu propio circuito con cables, resistencias y una
          fuente y que el sistema detecte si es serie o paralelo?
        </p>
        <button
          onClick={() => setShowCircuitDraw(true)}
          className="text-sm px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-sm"
        >
          Abrir editor de circuitos de corriente continua
        </button>
      </div>
    </div>
  );
}

// =======================
// Componente principal
// =======================

export default function Electricidad({ is3D }) {
  const [subtema, setSubtema] = useState(() => {
    try {
      return localStorage.getItem("electricidad:tab") || "coulomb";
    } catch (e) {
      return "coulomb";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("electricidad:tab", subtema);
    } catch (e) {}
  }, [subtema]);

  const subtemas = [
    { id: "coulomb", label: "2.1 Ley de Coulomb" },
    { id: "campo", label: "2.2 Campo eléctrico" },
    { id: "ohm", label: "2.3 Corriente y Ley de Ohm" },
  ];

  const etiquetaActual =
    subtemas.find((t) => t.id === subtema)?.label ?? "Subtema";

  return (
    <section
      id="electricidad"
      className="max-w-6xl mx-auto px-4 py-10 md:py-12 space-y-5"
    >
      <header className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-extrabold text-yellow-400">⚡ Electricidad</h2>
        <p className="text-sm text-gray-300 leading-relaxed">
          En este apartado el estudiante resuelve problemas identificando tipos de
          carga eléctrica, aplicando la Ley de Ohm y resolviendo circuitos de
          corriente continua.
        </p>
        <p className="text-sm text-gray-400">
          Subtema actual:&nbsp;
          <span className="font-semibold text-sky-400">{etiquetaActual}</span>
        </p>
      </header>

      <div className="rounded-3xl bg-slate-900/60 border border-slate-700 p-4 md:p-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {subtemas.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSubtema(tab.id)}
              className={`text-sm px-4 py-2 rounded-lg font-semibold transition-colors duration-150
                ${
                  subtema === tab.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-slate-800/70 text-slate-200 hover:bg-slate-700"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {subtema === "coulomb" && <CoulombSimulator is3D={is3D} />}
      {subtema === "campo" && <CampoElectricSimulator is3D={is3D} />}
      {subtema === "ohm" && <OhmSimulator />}
    </section>
  );
}
