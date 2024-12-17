/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        c1: "#0E0313",
        c2: "#1E0E2B",
        c3: "#123048",
        c4: "#196F7C",
        c5: "#03FF92",
        c6: "#142942",
      },
    },
    fontFamily: {
      segoe: ['"Segoe UI"'],
      literata: ['"Literata"'],
      roboto: ["'Roboto Mono'", "monospace"],
      sserif: ["'Source Serif Pro'", "serif"],
    },
  },
  plugins: [],
};
