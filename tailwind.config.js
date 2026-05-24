/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        softwhite: "#F7F7F8",
        lightgray: "#EAEAEA",
        matte: "#111111",
        accent: "#2563EB",
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(17, 17, 17, 0.08)",
        card: "0 12px 40px rgba(17, 17, 17, 0.08)",
        glow: "0 0 0 1px rgba(37, 99, 235, 0.2), 0 20px 50px rgba(37, 99, 235, 0.15)",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        pulseSoft: "pulseSoft 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
