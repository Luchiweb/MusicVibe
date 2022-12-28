/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.html", "./node_modules/flowbite/**/*.js"],
  darcMode: "class",
  theme: {
    extend: {
      colors: {
        mainColor: "#0D1A3C",
        subColor: "#E01B51",
      },
      // screens: {
      //   lg: { max: "1120px" },
      //   md: { max: "768px" },
      //   sm: { max: "350px" },
      // },
      container: {
        padding: "15px",
      },
    },
  },
  plugins: [require("./node_modules/flowbite/plugin.js")],
};
