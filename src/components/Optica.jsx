import React, { useState, useEffect } from "react";
import Simple3DScene from "./Simple3DScene";

function SnellSimulator({ is3D }) {
  const [n1, setN1] = useState(1);
  const [n2, setN2] = useState(1.5);
  const [theta1, setTheta1] = useState(30);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const calcular = () => {
    setError("");
    try {
      const n1Num = parseFloat(n1);
      const n2Num = parseFloat(n2);
      const t1 = (parseFloat(theta1) * Math.PI) / 180;

      if ([n1Num, n2Num, t1].some((x) => isNaN(x))) {
        setError("Ingresa valores válidos para n₁, n₂ y θ₁.");
        setResultado(null);
        return;
      }

      const seno2 = (n1Num * Math.sin(t1)) / n2Num;
      if (Math.abs(seno2) > 1) {
        // TIR
        const thetaCrit = Math.asin(n2Num / n1Num) * (180 / Math.PI);
        setResultado({
          tipo: "TIR",
          mensaje: "Ocurre Reflexión Interna Total.",
          theta2: null,
          thetaCritico: thetaCrit,
        });
        return;
      }

      const t2 = Math.asin(seno2);
      const theta2Deg = (t2 * 180) / Math.PI;
      let thetaCritico = null;
      if (n1Num > n2Num) {
        thetaCritico = Math.asin(n2Num / n1Num) * (180 / Math.PI);
      }

      setResultado({
        tipo: "normal",
        theta2: theta2Deg,
        thetaCritico,
      });
    } catch {
      setError("Error al calcular la refracción.");
      setResultado(null);
    }
  };

  useEffect(() => {
    calcular();
  }, []);

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-base md:text-lg font-semibold">
          3.4 Ley de Snell – Reflexión y refracción
        </h3>
        <span className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300">
          Vista {is3D ? "3D" : "2D"}
        </span>
      </div>
      <p className="text-xs md:text-sm text-gray-300">
        Ley de Snell:
        <span className="block italic mt-1">
          n₁ · sen(θ₁) = n₂ · sen(θ₂)
        </span>
      </p>

      <div className="grid md:grid-cols-2 gap-4 items-start text-xs md:text-sm">
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2">
            <label className="flex flex-col">
              <span>n₁</span>
              <input
                type="number"
                value={n1}
                onChange={(e) => setN1(e.target.value)}
                className="px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"
              />
            </label>
            <label className="flex flex-col">
              <span>n₂</span>
              <input
                type="number"
                value={n2}
                onChange={(e) => setN2(e.target.value)}
                className="px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"
              />
            </label>
            <label className="flex flex-col">
              <span>θ₁ (°)</span>
              <input
                type="number"
                value={theta1}
                onChange={(e) => setTheta1(e.target.value)}
                className="px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"
              />
            </label>
          </div>
          <button
            onClick={calcular}
            className="mt-2 w-full md:w-auto px-4 py-1.5 rounded-full bg-primary hover:bg-primary-dark text-xs font-semibold"
          >
            Calcular θ₂
          </button>

          {error && <p className="text-xs text-red-400 mt-1">{error}</p>}

          {resultado && resultado.tipo === "normal" && (
            <div className="mt-2 bg-slate-800/70 border border-slate-600 rounded-xl p-2 space-y-1">
              <p>
                <span className="font-semibold">θ₂:</span>{" "}
                {resultado.theta2.toFixed(2)}°
              </p>
              {resultado.thetaCritico && (
                <p>
                  <span className="font-semibold">θc:</span>{" "}
                  {resultado.thetaCritico.toFixed(2)}° (ángulo crítico)
                </p>
              )}
            </div>
          )}

          {resultado && resultado.tipo === "TIR" && (
            <div className="mt-2 bg-red-900/50 border border-red-500 rounded-xl p-2 space-y-1">
              <p className="font-semibold text-red-200">
                Reflexión Interna Total (TIR)
              </p>
              <p className="text-gray-100 text-[11px]">
                El rayo no se refracta, solo se refleja dentro del medio.
              </p>
              {resultado.thetaCritico && (
                <p className="text-[11px] text-gray-200">
                  θc ≈ {resultado.thetaCritico.toFixed(2)}°
                </p>
              )}
            </div>
          )}
        </div>

        {!is3D ? (
          <div className="relative h-44 rounded-xl border border-slate-700 bg-slate-900/80 overflow-hidden">
            <div className="absolute inset-x-0 top-1/2 h-px bg-sky-500/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-full w-px bg-slate-600/80" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 border-l-2 border-amber-300 transform origin-bottom rotate-[-40deg]" />
              <div className="w-32 h-32 border-l-2 border-emerald-300 transform origin-bottom rotate-[25deg]" />
            </div>
            <div className="absolute bottom-3 inset-x-0 text-center text-[11px] text-gray-300 px-2">
              Rayo incidente, normal y rayo refractado en 2D.
            </div>
          </div>
        ) : (
          <Simple3DScene />
        )}
      </div>
    </div>
  );
}

function LensSimulator({ is3D }) {
  const [s, setS] = useState(20); // distancia objeto
  const [f, setF] = useState(10);
  const [resultado, setResultado] = useState(null);
  const [error, setError] = useState("");

  const calcular = () => {
    setError("");
    try {
      const sNum = parseFloat(s);
      const fNum = parseFloat(f);
      if (isNaN(sNum) || isNaN(fNum) || sNum === 0 || fNum === 0) {
        setError("Ingresa valores válidos para s y f (≠ 0).");
        setResultado(null);
        return;
      }
      const invSprime = 1 / fNum - 1 / sNum;
      if (invSprime === 0) {
        setError("No se puede calcular s' con esos valores.");
        setResultado(null);
        return;
      }
      const sPrime = 1 / invSprime;
      const m = -sPrime / sNum;
      setResultado({ sPrime, m });
    } catch {
      setError("Error al calcular la imagen.");
      setResultado(null);
    }
  };

  useEffect(() => {
    calcular();
  }, []);

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4 space-y-3">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-base md:text-lg font-semibold">
          3.6 Lentes delgadas
        </h3>
        <span className="text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300">
          Vista {is3D ? "3D" : "2D"}
        </span>
      </div>
      <p className="text-xs md:text-sm text-gray-300">
        Ecuación de lentes delgadas:
        <span className="block italic mt-1">
          1/f = 1/s + 1/s′ , &nbsp; m = −s′/s
        </span>
      </p>

      <div className="grid md:grid-cols-2 gap-4 items-start text-xs md:text-sm">
        <div className="space-y-2">
          <label className="flex flex-col">
            <span>Distancia objeto s (cm)</span>
            <input
              type="number"
              value={s}
              onChange={(e) => setS(e.target.value)}
              className="px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"
            />
          </label>
          <label className="flex flex-col">
            <span>Distancia focal f (cm)</span>
            <input
              type="number"
              value={f}
              onChange={(e) => setF(e.target.value)}
              className="px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"
            />
          </label>
          <button
            onClick={calcular}
            className="mt-2 w-full md:w-auto px-4 py-1.5 rounded-full bg-primary hover:bg-primary-dark text-xs font-semibold"
          >
            Calcular s′ y m
          </button>
          {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
          {resultado && (
            <div className="mt-2 bg-slate-800/70 border border-slate-600 rounded-xl p-2 space-y-1">
              <p>
                <span className="font-semibold">s′:</span>{" "}
                {resultado.sPrime.toFixed(2)} cm
              </p>
              <p>
                <span className="font-semibold">m:</span>{" "}
                {resultado.m.toFixed(2)} (aumento)
              </p>
              <p className="text-[11px] text-gray-400">
                m &lt; 0 → imagen invertida. |m| &gt; 1 → imagen más grande.
              </p>
            </div>
          )}
        </div>

        {!is3D ? (
          <div className="relative h-44 rounded-xl border border-slate-700 bg-slate-900/80 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-32 w-1 bg-sky-400 rounded-full" />
            </div>
            <div className="absolute left-6 bottom-6 flex flex-col items-center">
              <div className="h-14 w-1 bg-emerald-400" />
              <span className="text-[10px] mt-1">Objeto</span>
            </div>
            <div className="absolute right-6 bottom-6 flex flex-col items-center">
              <div className="h-10 w-1 bg-amber-300" />
              <span className="text-[10px] mt-1">Imagen</span>
            </div>
            <div className="absolute bottom-2 inset-x-0 text-center text-[11px] text-gray-300 px-2">
              Representación esquemática de rayos principales de una lente
              convergente.
            </div>
          </div>
        ) : (
          <Simple3DScene />
        )}
      </div>
    </div>
  );
}

export default function Optica({ is3D }) {
  const [subtema, setSubtema] = useState("luz");

  const subtemas = [
    { id: "luz", label: "3.1 Luz y propagación" },
    { id: "espectro", label: "3.2 Espectro e intensidad" },
    { id: "snell", label: "3.3 Ley de Snell" },
    { id: "lentes", label: "3.4 Lentes delgadas" },
  ];

  const etiquetaActual =
    subtemas.find((t) => t.id === subtema)?.label ?? "Subtema";

  return (
    <section
      id="optica"
      className="max-w-6xl mx-auto px-4 py-10 md:py-12 space-y-5"
    >
      {/* titulo del tema */}
      <header className="space-y-1">
        <h2 className="text-2xl md:text-3xl font-bold">💡 Luz y Óptica</h2>
        <p className="text-xs md:text-sm text-gray-300">
          Aquí podrás resolver ejercicios de óptica, explicados e intercativos.
        </p>
        <p className="text-[11px] text-gray-400">
          Subtema actual:&nbsp;
          <span className="font-semibold text-sky-400">{etiquetaActual}</span>
        </p>
      </header>

      {/* barra de subtemas */}
      <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-3">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
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

      {/* contenido en cada subtema */}

      {subtema === "luz" && (
        <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4 text-xs md:text-sm">
          <h3 className="font-semibold mb-1">3.1 Luz y su propagación</h3>
          <p className="text-gray-300">
            La luz es una onda electromagnética que se propaga en el vacío con
            velocidad c ≈ 3×10⁸ m/s. En un medio con índice de refracción n, la
            velocidad disminuye:
            <span className="block italic mt-1">v = c / n</span>
          </p>
        </div>
      )}

      {subtema === "espectro" && (
        <div className="grid md:grid-cols-2 gap-4 text-xs md:text-sm">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
            <h3 className="font-semibold mb-1">3.2 Espectro electromagnético</h3>
            <p className="text-gray-300 mb-2">
              El espectro va desde ondas de radio (baja frecuencia, gran longitud
              de onda) hasta rayos gamma (alta frecuencia, longitud de onda muy
              pequeña). El espectro visible se encuentra aproximadamente entre
              400&nbsp;nm y 700&nbsp;nm.
            </p>
            <img
              src="/img/espectro.png"
              alt="Espectro electromagnético"
              className="mt-2 w-full rounded-lg border border-slate-700"
            />
            <p className="text-[11px] text-gray-400">
              En tu proyecto puedes usar esta imagen como apoyo visual para
              explicar dónde se ubica la luz visible.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4">
            <h3 className="font-semibold mb-1">Intensidad luminosa</h3>
            <p className="text-gray-300 mb-1">
              La intensidad de una fuente puntual disminuye con el cuadrado de la
              distancia:
              <span className="block italic mt-1">I ∝ 1 / r²</span>
            </p>
            <p className="text-gray-300 text-[11px]">
              Si consideramos una esfera de radio r, el área es A = 4πr², por lo
              que la energía se reparte en una superficie cada vez mayor.
            </p>
          </div>
        </div>
      )}

      {subtema === "snell" && <SnellSimulator is3D={is3D} />}

      {subtema === "lentes" && <LensSimulator is3D={is3D} />}
    </section>
  );
}
