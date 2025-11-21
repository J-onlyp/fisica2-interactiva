import React, { useState } from "react";

import Coulomb3DScene from "./Coulomb3DScene";
import Field3DScene from "./Field3DScene";
import CircuitDrawSimulator from "./CircuitDrawSimulator";

const K = 8.99e9; // N·m²/C²

//coulomb

function CoulombSimulator() {
  const [q1, setQ1] = useState("0.000001"); // μC
  const [q2, setQ2] = useState("0.000001"); // μC
  const [r, setR] = useState("0.1");        // m
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const calcular = () => {
    setError("");

    const q1Num = parseFloat(q1);
    const q2Num = parseFloat(q2);
    const rNum = parseFloat(r);

    if ([q1Num, q2Num, rNum].some((v) => isNaN(v))) {
      setError("Ingresa valores numéricos válidos.");
      setResultado(null);
      return;
    }
    if (rNum <= 0) {
      setError("La distancia r debe ser mayor que 0.");
      setResultado(null);
      return;
    }

    const q1C = q1Num * 1e-6;
    const q2C = q2Num * 1e-6;

    const F = (K * Math.abs(q1C * q2C)) / (rNum * rNum);
    const tipo =
      q1Num * q2Num > 0
        ? "Repulsión (cargas del mismo signo)"
        : "Atracción (cargas de signo opuesto)";

    setResultado({
      F,
      tipo,
      q1Input: q1Num,
      q2Input: q2Num,
      r: rNum,
      q1C,
      q2C,
    });
  };

  const intensidad =
    resultado && resultado.F > 0
      ? Math.min(1, Math.log10(1 + resultado.F) / 6)
      : 0.3;

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4 space-y-4">
      <h3 className="text-base md:text-lg font-semibold">
        2.1 Ley de Coulomb – Fuerza eléctrica
      </h3>

      <p className="text-xs md:text-sm text-gray-300">
        Calcula la fuerza eléctrica entre dos cargas puntuales:
        <span className="block mt-1 italic">
          F = k · |q₁ q₂| / r²
        </span>
      </p>

      {/* entrada y resultado */}
      <div className="grid md:grid-cols-2 gap-4 items-start">
        <div className="space-y-2 text-xs md:text-sm">
          <div className="grid grid-cols-2 gap-2">
            <label className="flex flex-col">
              <span>q₁ (μC)</span>
              <input
                type="number"
                value={q1}
                onChange={(e) => setQ1(e.target.value)}
                className="px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"
              />
            </label>
            <label className="flex flex-col">
              <span>q₂ (μC)</span>
              <input
                type="number"
                value={q2}
                onChange={(e) => setQ2(e.target.value)}
                className="px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"
              />
            </label>
            <label className="flex flex-col col-span-2">
              <span>r (m)</span>
              <input
                type="number"
                value={r}
                onChange={(e) => setR(e.target.value)}
                className="px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"
              />
            </label>
          </div>

          <button
            onClick={calcular}
            className="mt-2 w-full md:w-auto px-4 py-1.5 rounded-full bg-primary hover:bg-primary-dark text-xs font-semibold"
          >
            Calcular F
          </button>

          {error && <p className="text-xs text-red-400 mt-1">{error}</p>}

          {resultado && (
            <div className="mt-2 text-xs md:text-sm bg-slate-800/70 border border-slate-600 rounded-xl p-2 space-y-1">
              <p>
                <span className="font-semibold">Fuerza:</span>{" "}
                {resultado.F.toExponential(3)} N
              </p>
              <p>
                <span className="font-semibold">Tipo:</span> {resultado.tipo}
              </p>
              <p className="text-[11px] text-gray-400">
                q₁ = {resultado.q1Input} μC · q₂ = {resultado.q2Input} μC · r ={" "}
                {resultado.r} m
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
      <div className="grid md:grid-cols-2 gap-4 items-stretch">
        <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300">
              Visualización 2D
            </span>
            {resultado && (
              <span className="text-[11px] text-amber-300 font-semibold">
                {resultado.tipo.startsWith("Repulsión")
                  ? "Repulsión"
                  : "Atracción"}
              </span>
            )}
          </div>

          <div className="flex-1 relative flex items-center justify-center">
            <div className="absolute left-6 flex flex-col items-center gap-1">
              <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center text-xs font-bold">
                {resultado && resultado.q1Input >= 0 ? "+" : "−"}
              </div>
              <div className="text-[10px] text-gray-300">
                q₁ = {q1} μC
              </div>
            </div>

            <div className="absolute right-6 flex flex-col items-center gap-1">
              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold">
                {resultado && resultado.q2Input >= 0 ? "+" : "−"}
              </div>
              <div className="text-[10px] text-gray-300">
                q₂ = {q2} μC
              </div>
            </div>

            <div className="h-0.5 w-32 bg-gradient-to-r from-red-400 via-amber-300 to-blue-400" />
            <div className="absolute bottom-3 text-[11px] text-gray-300">
              Representación 2D del vector de fuerza.
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3 flex flex-col">
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
            <Coulomb3DScene minHeight={260} intensity={intensidad} />
          </div>
        </div>
      </div>
    </div>
  );
}

//campo electrico

function CampoElectricSimulator() {
  const [q, setQ] = useState("0.000001"); // μC
  const [r, setR] = useState("0.1");      // m
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const calcular = () => {
    setError("");

    const qNum = parseFloat(q);
    const rNum = parseFloat(r);

    if ([qNum, rNum].some((v) => isNaN(v))) {
      setError("Ingresa valores numéricos válidos.");
      setResultado(null);
      return;
    }
    if (rNum <= 0) {
      setError("La distancia r debe ser mayor que 0.");
      setResultado(null);
      return;
    }

    const qC = qNum * 1e-6;
    const E = (K * Math.abs(qC)) / (rNum * rNum); // N/C

    const direccion =
      qNum > 0
        ? "Sale radialmente hacia afuera (carga positiva)"
        : "Entra radialmente hacia la carga (carga negativa)";

    setResultado({
      E,
      qInput: qNum,
      qC,
      r: rNum,
      direccion,
    });
  };

  const intensidad =
    resultado && resultado.E > 0
      ? Math.min(1, Math.log10(1 + resultado.E) / 10)
      : 0.3;

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4 space-y-4">
      <h3 className="text-base md:text-lg font-semibold">
        2.2 Campo eléctrico de una carga puntual
      </h3>

      <p className="text-xs md:text-sm text-gray-300">
        El campo eléctrico generado por una carga puntual se define como:
        <span className="block mt-1 italic">
          E = k · |q| / r²
        </span>
        donde <span className="font-semibold">E</span> se mide en N/C,
        <span className="font-semibold"> q</span> es la carga y
        <span className="font-semibold"> r</span> la distancia al punto de estudio.
      </p>

      <div className="grid md:grid-cols-2 gap-4 items-start">
        <div className="space-y-2 text-xs md:text-sm">
          <div className="grid grid-cols-2 gap-2">
            <label className="flex flex-col col-span-2">
              <span>q (μC)</span>
              <input
                type="number"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"
              />
            </label>
            <label className="flex flex-col col-span-2">
              <span>r (m)</span>
              <input
                type="number"
                value={r}
                onChange={(e) => setR(e.target.value)}
                className="px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"
              />
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
            <div className="mt-2 text-xs md:text-sm bg-slate-800/70 border border-slate-600 rounded-xl p-2 space-y-1">
              <p>
                <span className="font-semibold">Campo eléctrico:</span>{" "}
                {resultado.E.toExponential(3)} N/C
              </p>
              <p>
                <span className="font-semibold">Dirección:</span>{" "}
                {resultado.direccion}
              </p>
              <p className="text-[11px] text-gray-400">
                q = {resultado.qInput} μC · r = {resultado.r} m
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
        <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300">
              Visualización 2D
            </span>
            {resultado && (
              <span className="text-[11px] text-amber-300 font-semibold">
                {resultado.qInput >= 0 ? "Carga positiva" : "Carga negativa"}
              </span>
            )}
          </div>

          <div className="flex-1 relative flex items-center justify-center">
            <div className="flex flex-col items-center gap-1">
              <div
                className={`h-12 w-12 rounded-full flex items-center justify-center text-sm font-bold ${
                  resultado && resultado.qInput < 0
                    ? "bg-blue-500"
                    : "bg-red-500"
                }`}
              >
                {resultado && resultado.qInput < 0 ? "−" : "+"}
              </div>
              <div className="text-[10px] text-gray-300">
                q = {q} μC
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative h-24 w-24">
                {[...Array(8)].map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const length = 30;
                  const sign = resultado && resultado.qInput < 0 ? -1 : 1;

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

        <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3 flex flex-col">
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
              isNegative={resultado && resultado.qInput < 0}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

//circuitos

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

    const I = Vnum / Rnum;          // A
    const P = Vnum * I;             // W

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
      <CircuitDrawSimulator
        onBack={() => setShowCircuitDraw(false)}
      />
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
    <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4 space-y-4">
      <h3 className="text-base md:text-lg font-semibold">
        2.3 Corriente y Ley de Ohm
      </h3>

      <p className="text-xs md:text-sm text-gray-300">
        La Ley de Ohm relaciona el voltaje, la corriente y la resistencia:
        <span className="block mt-1 italic">
          V = I · R &nbsp;&nbsp;⇔&nbsp;&nbsp; I = V / R
        </span>
        donde <span className="font-semibold">V</span> está en voltios (V),
        <span className="font-semibold"> I</span> en amperios (A) y
        <span className="font-semibold"> R</span> en ohmios (Ω).
      </p>

      {/* entradas y resultados */}
      <div className="grid md:grid-cols-2 gap-4 items-start">
        {/* entradas y boton */}
        <div className="space-y-2 text-xs md:text-sm">
          <div className="grid grid-cols-2 gap-2">
            <label className="flex flex-col col-span-2">
              <span>Voltaje V (voltios)</span>
              <input
                type="number"
                value={V}
                onChange={(e) => setV(e.target.value)}
                className="px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"
              />
            </label>
            <label className="flex flex-col col-span-2">
              <span>Resistencia R (Ω)</span>
              <input
                type="number"
                value={R}
                onChange={(e) => setR(e.target.value)}
                className="px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"
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
            <div className="mt-2 text-xs md:text-sm bg-slate-800/70 border border-slate-600 rounded-xl p-2 space-y-1">
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

        {/* explicacion breve */}
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

      {/* visualización 2D (circuito) */}
      <div className="rounded-xl border border-slate-700 bg-slate-900/80 p-3 flex flex-col gap-3">
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
          {/* circuito simple*/}
          <div className="relative w-full h-24 flex items-center justify-center">
            {/* "bateria" */}
            <div className="absolute left-6 flex flex-col items-center gap-1">
              <div className="h-10 w-6 rounded-md bg-slate-800 border border-slate-500 flex flex-col justify-center">
                <div className="h-1.5 w-4 bg-slate-200 mx-auto mb-1" />
                <div className="h-0.5 w-3 bg-slate-500 mx-auto" />
              </div>
              <span className="text-[10px] text-gray-300">
                Fuente ({V} V)
              </span>
            </div>

            {/* resistores */}
            <div className="absolute right-6 flex flex-col items-center gap-1">
              <div className="h-4 w-10 bg-slate-300 rounded-sm" />
              <span className="text-[10px] text-gray-300">
                R = {R} Ω
              </span>
            </div>

            {/* cable superior */}
            <div className="absolute top-6 left-10 right-10 h-0.5 bg-slate-600" />

            {/* cable inferior */}
            <div className="absolute bottom-6 left-10 right-10 h-0.5 bg-slate-600" />

            {/* barra de corriente */}
            <div className="absolute inset-x-16 top-[22px] h-2 rounded-full bg-slate-800 overflow-hidden">
              <div
                className={`h-full ${colorBarra} transition-all duration-500`}
                style={{ width: `${anchoBarra}%` }}
              />
            </div>

            {/* flechas de sentido */}
            <div className="absolute top-[19px] right-[52px] w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-slate-100" />
          </div>

          <p className="text-gray-300">
            La anchura y el color de la barra representan la intensidad de la
            corriente: valores pequeños en azul, moderados en amarillo y altos
            en rojo.
          </p>
        </div>
      </div>

      {/* boton para el editor de ciruitos */}
      <div className="pt-2 border-t border-slate-700 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <p className="text-[11px] md:text-xs text-gray-400 max-w-md">
          ¿Quieres diseñar tu propio circuito con cables, resistencias y una
          fuente y que el sistema detecte si es serie o paralelo?
        </p>
        <button
          onClick={() => setShowCircuitDraw(true)}
          className="text-xs px-4 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-sm"
        >
          Abrir editor de circuitos de corriente continua
        </button>
      </div>
    </div>
  );
}

export default function Electricidad({ is3D }) {
  const [subtema, setSubtema] = useState("coulomb");

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
      {}
      <header className="space-y-1">
        <h2 className="text-2xl md:text-3xl font-bold">⚡ Electricidad</h2>
        <p className="text-xs md:text-sm text-gray-300">
          Competencia: el estudiante resuelve problemas identificando tipos de
          carga eléctrica, aplicando la Ley de Ohm, resolviendo circuitos de
          corriente continua y prediciendo el comportamiento de cargas en campos
          eléctricos.
        </p>
        <p className="text-[11px] text-gray-400">
          Subtema actual:&nbsp;
          <span className="font-semibold text-sky-400">{etiquetaActual}</span>
        </p>
      </header>

      {}
      <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-3">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {subtemas.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSubtema(tab.id)}
              className={`text-[11px] md:text-xs px-3 py-2 rounded-full font-medium transition
                ${
                  subtema === tab.id
                    ? "bg-primary text-white shadow-sm"
                    : "bg-slate-800/80 text-slate-200 hover:bg-slate-700"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {}
      {subtema === "coulomb" && <CoulombSimulator is3D={is3D} />}

      {subtema === "campo" && <CampoElectricSimulator is3D={is3D} />}

      {subtema === "ohm" && <OhmSimulator />}

    </section>
  );
}
