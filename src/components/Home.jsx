import React, { useEffect, useState } from "react";

export default function Home({ onChangeSection }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  const IconBolt = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M13 2L3 14h7l-1 8L21 10h-7l-1-8z" fill="currentColor" />
    </svg>
  );

  const IconField = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2v2m0 12v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const IconOmega = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 2c3 0 5 2 5 5a5 5 0 01-5 5 5 5 0 01-5-5c0-3 2-5 5-5zM7 22h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const sections = [
    {
      key: "ley-coulomb",
      title: "Ley de Coulomb",
      desc: "Constante k y fuerza entre dos cargas puntuales.",
      icon: <IconBolt />,
      lightClasses: "from-yellow-50 to-yellow-100",
      darkClasses: "dark:from-yellow-500 dark:to-yellow-600",
    },
    {
      key: "campo-electrico",
      title: "Campo Eléctrico",
      desc: "Definición, líneas de campo y cálculo de magnitudes.",
      icon: <IconField />,
      lightClasses: "from-sky-50 to-sky-100",
      darkClasses: "dark:from-blue-500 dark:to-blue-600",
    },
    {
      key: "ley-ohm",
      title: "Ley de Ohm",
      desc: "Relación entre voltaje, corriente y resistencia en circuitos.",
      icon: <IconOmega />,
      lightClasses: "from-rose-50 to-rose-100",
      darkClasses: "dark:from-rose-500 dark:to-rose-600",
    },
  ];

  return (
    <section id="inicio" className="max-w-6xl mx-auto px-4 py-12">
      <div className="rounded-3xl p-6 md:p-10 shadow-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-slate-50/80 to-slate-100/60 dark:bg-gradient-to-r dark:from-slate-900/80 dark:via-slate-800/70 dark:to-slate-900/80 dark:backdrop-blur-sm">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Texto principal */}
          <div className="w-full md:w-64 flex-shrink-0">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-400 tracking-tight leading-tight">
                  Electricidad
                </h1>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                  Recursos y simuladores para entender cargas, campos electricos y circuitos.
                </p>

                {/* Se han eliminado botones repetitivos; usar las tarjetas a la derecha para navegar */}

                <p className="text-xs text-slate-400 leading-relaxed">
                  Diseñado para estudiantes: unidades SI, fórmulas renderizadas y modos claro/oscuro.
                </p>
              </div>
          </div>

          {/* Menú de tarjetas */}
          <nav className="flex-1">
            <div className="space-y-4">
                <div className="rounded-lg p-6 max-w-3xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-600 dark:backdrop-blur-sm">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">¿Qué es la electricidad?</h4>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">Fenómeno físico relacionado con la presencia y el movimiento de cargas eléctricas; incluye fuerzas entre cargas, campos eléctricos y corriente en circuitos.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full items-stretch">
              {sections.map((s, i) => (
                <button
                  key={s.key}
                  onClick={() => {
                    // Guardar el subtema esperado por el componente Electricidad
                    try {
                      // mapear claves locales a los ids que usa Electricidad
                      const map = {
                        "ley-coulomb": "coulomb",
                        "campo-electrico": "campo",
                        "ley-ohm": "ohm",
                      };
                      const sub = map[s.key] || "coulomb";
                      localStorage.setItem("electricidad:tab", sub);
                    } catch (e) {}
                    onChangeSection("electricidad");
                  }}
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className={`group relative overflow-hidden rounded-xl p-6 flex flex-col justify-between gap-3 w-full max-w-[20rem] min-h-[6.25rem] transform transition-all duration-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'} hover:-translate-y-1 focus:-translate-y-1 focus:outline-none border border-slate-200 dark:border-slate-600 bg-gradient-to-br ${s.lightClasses} ${s.darkClasses} text-slate-900 dark:text-white shadow-lg`}
                  aria-label={`Ir a ${s.title}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-white/10 dark:bg-white/10">
                      <span className="inline-block text-current">{s.icon}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-lg leading-tight text-slate-900 dark:text-white">{s.title}</div>
                      <div className="text-xs opacity-90 mt-1 text-slate-700 dark:text-slate-200">{s.desc}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            </div>
          
          </nav>
        </div>

        {/* Sección de constantes y accesos */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl bg-slate-900/70 dark:bg-slate-900/80 border border-slate-700 p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-100">Constantes físicas</h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">Constante de Coulomb k = 8.99×10⁹ N·m²/C²</p>
          </div>

          <div className="rounded-xl bg-slate-900/70 dark:bg-slate-900/80 border border-slate-700 p-6 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-sm font-semibold text-slate-100">Recursos rápidos</h3>
              <ul className="mt-3 text-sm text-slate-300 space-y-2">
                <li>Fórmulas renderizadas</li>
                <li>Calculadoras interactivas</li>
                <li>Material de apoyo y ejercicios</li>
                <li>Asistente de IA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
