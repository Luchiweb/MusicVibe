/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.html", "./node_modules/flowbite/**/*.js"],
  darcMode: "class",
  theme: {
    extend: {
      keyframes: {
        flow: {
          "0%, 100%": { "background-position": "0 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
      colors: {
        mainColor: "#0D1A3C",
        subColor: "#E01B51",
      },
      container: {
        padding: "15px",
      },
      animation: {
        flow: "flow 2s ease-in-out",
      },
    },
  },
  plugins: [require("./node_modules/flowbite/plugin.js")],
};
