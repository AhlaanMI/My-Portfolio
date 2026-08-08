/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#08090d",
        surface: "#10131a",
        surfaceAlt: "#151922",
        line: "rgba(255,255,255,0.08)",
        accent: "#00c2ff",
        accentLight: "#4dd6ff",
        textPrimary: "#f5f7fa",
        secondary: "#9aa1ad",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
