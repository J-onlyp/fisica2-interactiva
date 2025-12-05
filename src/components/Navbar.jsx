import React from "react";

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "electricidad", label: "Electricidad" },
];

export default function Navbar({
  currentSection,
  onChangeSection,
  darkMode,
  toggleDarkMode,
}) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm bg-slate-50/80 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700">
      <nav className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-6">

        {/* LOGO */}
        <div
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => onChangeSection("inicio")}
          aria-label="Ir al inicio"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-slate-900 font-extrabold shadow-md">
            ⚡
          </div>
          <div className="leading-tight">
            <div className="text-base font-extrabold text-slate-900 dark:text-white">Física</div>
            <div className="text-xs text-slate-500 dark:text-slate-300">Electricidad</div>
          </div>
        </div>

        {/* MENÚ */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3 bg-slate-50/50 dark:bg-slate-800/40 p-1 rounded-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onChangeSection(item.id)}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                  currentSection === item.id
                    ? "bg-yellow-500 text-white shadow"
                    : "text-slate-700 dark:text-slate-200 hover:bg-slate-800/40 hover:text-white"
                }`}
                aria-current={currentSection === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded-full bg-white/60 dark:bg-slate-700 hover:scale-105 transition-transform shadow-sm flex items-center justify-center"
            title="Cambiar modo"
            aria-pressed={darkMode}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {darkMode ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36l-1.42 1.42M7.05 16.95l-1.42 1.42M18.36 18.36l-1.42-1.42M7.05 7.05L5.64 5.64" />
              )}
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
