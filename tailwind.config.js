/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      vazirMedium: "vazirMedium",
      vazirBold: "vazirBold",
      vazirExtraBold: "vazirExtraBold",
      vazirRegular: "vazirRegular",
    },
    extend: {
      screens: { xs: "450px", 1150:"1152px" },
      boxShadow: { cards: "0px 2px 8px rgba(99, 99, 99, 0.4)" },
      transitionDuration: { 400: "400ms" , 1500:"1500ms",600:"600ms" },
      animation: {
        "move-bg": "move .75s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { backgroundPosition: "50% 0" },
          "25%": { backgroundPosition: "100% 0" },
          "50%": { backgroundPosition: "50% 0" },
          "75%": { backgroundPosition: "0% 0" },
          "100%": { backgroundPosition: "50% 0" },
        }
      },
    },
  },
  plugins: [],
};
