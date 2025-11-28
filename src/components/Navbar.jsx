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
    <header className="sticky top-0 z-30 backdrop-blur bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        {/* LOGO */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => onChangeSection("inicio")}
        >
          <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold">
            ⚡
          </div>
          <span className="font-semibold text-slate-800 dark:text-slate-100">
            Física 2 - Electricidad
          </span>
        </div>

        {/* MENÚ */}
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onChangeSection(item.id)}
              className={`text-sm font-medium transition ${
                currentSection === item.id
                  ? "text-yellow-500 border-b-2 border-yellow-500"
                  : "text-slate-600 dark:text-slate-300 hover:text-yellow-400"
              }`}
            >
              {item.label}
            </button>
          ))}

          {}
          <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:scale-105 transition"
            title="Cambiar modo"
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>
    </header>
  );
}
