/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bone: "#F2EBDE",
        parchment: "#E8DFC9",
        ink: "#15120E",
        ember: "#C2410C",
        rust: "#8C2E05",
        sage: "#556052",
        smoke: "#6B6358",
        whisper: "#D9CFB8",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        editorial: ["'Instrument Serif'", "serif"],
        sans: ["'Instrument Sans'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
