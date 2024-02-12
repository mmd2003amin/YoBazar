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
      screens: { xs: "450px" },
      boxShadow : { "cards": "0px 2px 8px rgba(99, 99, 99, 0.4)"},
      transitionDuration : {"400" : "400ms"}
    },
  },
  plugins: [],
};
