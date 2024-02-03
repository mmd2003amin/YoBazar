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
    },
  },
  plugins: [],
};
