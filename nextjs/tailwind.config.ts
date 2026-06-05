import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#04223F", 900: "#021526", 800: "#03192E" },
        brand: { DEFAULT: "#0056AC", 400: "#2E7BD1", 200: "#9CC3EA" },
        red: { DEFAULT: "#D80000", 600: "#B40000" },
        steel: "#929497",
        mist: "#F4F4F4",
        paper: "#F8F7F2",
      },
      fontFamily: {
        // Wired to next/font CSS variables (see app/layout.tsx)
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: { kicker: "0.32em" },
      maxWidth: { shell: "78rem" },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "none" },
        },
        drift: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(-1.5deg)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        rise: "rise 1s cubic-bezier(.2,.7,.2,1) forwards",
        drift: "drift 9s ease-in-out infinite",
        "drift-slow": "drift 14s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
