import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Electricidad from "./components/Electricidad";

export default function App() {
  const [section, setSection] = useState("inicio");
  const [darkMode, setDarkMode] = useState(true);

  // preferencia de modo oscuro
  useEffect(() => {
    const savedDark = localStorage.getItem("f2_darkMode");
    if (savedDark !== null) setDarkMode(savedDark === "true");
  }, []);

  // aplicar o quitar modo oscuro
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("f2_darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  const renderSection = () => {
    switch (section) {
      case "electricidad":
        return <Electricidad />;
      default:
        return <Home onChangeSection={setSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-slate-950 dark:text-gray-100 transition-colors duration-300">
      <Navbar
        currentSection={section}
        onChangeSection={setSection}
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((prev) => !prev)}
      />
      <main className="pb-10">{renderSection()}</main>
      <footer className="border-t border-slate-200 dark:border-slate-800 py-4 text-center text-[11px] text-gray-500 dark:text-gray-400">
        Electricidad · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
