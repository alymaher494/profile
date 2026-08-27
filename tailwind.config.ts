import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050a14",
        surface: "#0a1220",
        "surface-2": "#0f1a2e",
        line: "#1c2940",
        "line-strong": "#2a3b5c",
        signal: "#b8f235",
        "signal-strong": "#c9ff45",
        "signal-dim": "rgba(184,242,53,0.14)",
        ink: "#eef2f7",
        muted: "#8b98ab",
        "muted-2": "#5c6577",
        danger: "#ff5d5d",
        warning: "#ffc94d",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        shell: "1200px",
      },
      keyframes: {
        "signal-pulse": {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "grid-drift": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(40px)" },
        },
      },
      animation: {
        "signal-pulse": "signal-pulse 3.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
