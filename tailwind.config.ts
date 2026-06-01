import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "warm-white": "#FAF7F2",
        "dartmouth-green": {
          DEFAULT: "#00693E",
          hover: "#00532F",
          deep: "#003D24",
        },
        terracotta: {
          DEFAULT: "#C1673A",
          hover: "#A85730",
        },
        cobalt: {
          DEFAULT: "#1B4FD8",
          hover: "#1640B0",
        },
        sage: "#7A9E7E",
        stone: "#D6CFC4",
        charcoal: "#2C2C2C",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "wide-serif": "0.005em",
      },
      maxWidth: {
        measure: "38rem",
      },
      boxShadow: {
        warm:
          "0 1px 2px rgba(60, 40, 20, 0.04), 0 8px 24px rgba(60, 40, 20, 0.08)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 400ms ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
