import React from "react";

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "electricidad", label: "Electricidad" },
  { id: "optica", label: "Luz y Óptica" },
];

export default function Navbar({
  currentSection,
  onChangeSection,
  darkMode,
  toggleDarkMode,
}) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onChangeSection("inicio")}
        >
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
            F2
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-sm md:text-base">
              Laboratorio Virtual
            </p>
            <p className="text-[11px] md:text-xs text-gray-400">
              Electricidad · Óptica
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center gap-3 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onChangeSection(item.id)}
                  className={`px-3 py-1.5 rounded-full transition text-xs font-medium ${
                    currentSection === item.id
                      ? "bg-primary text-white shadow-sm"
                      : "text-gray-300 hover:bg-slate-800"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* dark mode */}
          <button
            onClick={toggleDarkMode}
            aria-label="Cambiar modo claro/oscuro"
            className="h-9 w-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-yellow-300 text-lg transition"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </header>
  );
}
