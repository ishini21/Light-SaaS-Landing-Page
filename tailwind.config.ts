import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
  lighthero: "radial-gradient(ellipse 200% 100% at bottom left, #1d4ed8, #eff6ff 100%)", // blue-700 to blue-50
  darkhero: "radial-gradient(ellipse 200% 100% at bottom left, #111827, #1f2937 100%)", // gray-900 to gray-800
},
      colors: {
        lightbg: "#f9fafb", // light background
        darkbg: "#1f2937", // dark background
        lighttext: "#111827",
        darktext: "#f9fafb",
        
      },
    },
  },
  plugins: [],
};

export default config;
