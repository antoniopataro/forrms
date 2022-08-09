/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bg: "#1a1a1a",
      bgVar: "#171717",
      fg: "#242424",
      fgVar: "#545454",
      text: "#d9d9d9",
      extreme: "#fff",
      primary: "#676CDB",
      primaryVar: "#5256AF",
      transparent: "transparent",
    },
    extend: {
      animation: {
        slideDown: "slideDown .25s ease forwards",
        slideDown25: "slideDown .25s ease forwards .25s",
        slideDown50: "slideDown .25s ease forwards .50s",
      },
      keyframes: {
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
