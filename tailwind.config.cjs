/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb", // azul
          light: "#60a5fa",
          dark: "#1d4ed8",
        },
        accent: "#22c55e", // verde suave
      },
    },
  },
  plugins: [],
};
