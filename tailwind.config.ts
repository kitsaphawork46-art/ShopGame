import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050A14",
        panel: "#0B1224",
        line: "#1E293B",
        brand: "#2563EB",
        cyan: "#38BDF8",
      },
      boxShadow: {
        glow: "0 0 40px rgba(37,99,235,.20)",
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 1s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
