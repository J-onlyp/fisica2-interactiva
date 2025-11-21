import React from "react";

export default function Home({ onChangeSection }) {
  return (
    <section id="inicio" className="max-w-6xl mx-auto px-4 py-10 md:py-12">
      {/* HERO */}
      <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
            <span className="text-yellow-300">
            Electricidad &</span>{" "}
            <span className="text-primary-light">
              Luz y óptica
            </span>
          </h1>
          <p className="text-sm md:text-base text-gray-300 mb-4">
            Explora, aprende y experimenta los conceptos clave de{" "}
            <span className="font-semibold text-yellow-500">
              Electricidad
            </span>{" "}
            y{" "}
            <span className="font-semibold text-primary-light">Óptica</span>{" "}
            usando simuladores 2D/3D, calculadoras y fórmulas renderizadas.
          </p>
          <p className="text-xs md:text-sm text-gray-400 mb-4">
            Diseñado para estudiantes de Ingeniería.
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            {[
              { label: "Ley de Coulomb", section: "electricidad" },
              { label: "Campo Eléctrico", section: "electricidad" },
              { label: "Ley de Ohm", section: "electricidad" },
              { label: "Snell (Refracción)", section: "optica" },
              { label: "Lente delgada", section: "optica" },
            ].map((btn) => (
              <button
                key={btn.label}
                onClick={() => onChangeSection(btn.section)}
                className="text-xs md:text-sm px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-600 text-gray-100"
              >
                {btn.label}
              </button>
            ))}
          </div>

          <div className="text-xs md:text-sm text-gray-400">
            <p className="font-semibold mb-1">Unidades SI:</p>
            <p>Carga (C), Distancia (m), Fuerza (N), Voltaje (V), Corriente (A), Resistencia (Ω).</p>
          </div>
        </div>

        {}
        <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4 md:p-5 shadow-xl">
          <p className="text-xs uppercase text-primary-light mb-2 font-semibold">
            Módulos principales
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span>⚡</span>
              <span>
                <span className="font-semibold">Electricidad:</span> Coulomb, Campo, Potencial, Ley de Ohm y Circuitos.
              </span>
            </li>
            <li className="flex gap-2">
              <span>💡</span>
              <span>
                <span className="font-semibold">Óptica:</span> Luz, espectro, intensidad, reflexión y refracción (Snell), interferencia y lentes delgadas.
              </span>
            </li>
          </ul>
          <p className="mt-3 text-xs text-gray-400">
            Modo claro/oscuro, accesibilidad, y simuladores 2D/3D en la parte superior.
          </p>
        </div>
      </div>

      {/* tabla */}
      <div className="rounded-2xl border border-slate-700 bg-slate-900/80 p-4 md:p-5">
        <h2 className="text-lg md:text-xl font-semibold mb-3">
          Constantes físicas clave
        </h2>
        <div className="overflow-x-auto text-xs md:text-sm">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-slate-800/80">
                <th className="border border-slate-700 px-2 py-1 text-left">
                  Nombre
                </th>
                <th className="border border-slate-700 px-2 py-1 text-left">
                  Símbolo
                </th>
                <th className="border border-slate-700 px-2 py-1 text-left">
                  Valor
                </th>
                <th className="border border-slate-700 px-2 py-1 text-left">
                  Unidades
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-700 px-2 py-1">
                  Constante de Coulomb
                </td>
                <td className="border border-slate-700 px-2 py-1">k</td>
                <td className="border border-slate-700 px-2 py-1">
                  8.99×10⁹
                </td>
                <td className="border border-slate-700 px-2 py-1">
                  N·m²/C²
                </td>
              </tr>
              <tr>
                <td className="border border-slate-700 px-2 py-1">
                  Permitividad del vacío
                </td>
                <td className="border border-slate-700 px-2 py-1">ε₀</td>
                <td className="border border-slate-700 px-2 py-1">
                  8.85×10⁻¹²
                </td>
                <td className="border border-slate-700 px-2 py-1">F/m</td>
              </tr>
              <tr>
                <td className="border border-slate-700 px-2 py-1">
                  Velocidad de la luz
                </td>
                <td className="border border-slate-700 px-2 py-1">c</td>
                <td className="border border-slate-700 px-2 py-1">
                  2.9979×10⁸
                </td>
                <td className="border border-slate-700 px-2 py-1">m/s</td>
              </tr>
              <tr>
                <td className="border border-slate-700 px-2 py-1">
                  Índice del aire
                </td>
                <td className="border border-slate-700 px-2 py-1">n</td>
                <td className="border border-slate-700 px-2 py-1">1.0003</td>
                <td className="border border-slate-700 px-2 py-1">—</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-xs text-gray-400">
          Las fórmulas del sitio se encuentran renderizadas.
        </p>
      </div>
    </section>
  );
}
