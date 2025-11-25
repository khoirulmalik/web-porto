/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00d4ff",
        secondary: "#ff6b6b",
        dark: {
          100: "#1a1a3a",
          200: "#0f0f23",
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeInUp: "fadeInUp 1s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)",
            opacity: "0.5",
          },
          "25%": {
            transform: "translateY(-20px) translateX(10px)",
            opacity: "1",
          },
          "50%": {
            transform: "translateY(-10px) translateX(-10px)",
            opacity: "0.8",
          },
          "75%": {
            transform: "translateY(-30px) translateX(5px)",
            opacity: "0.6",
          },
        },
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
