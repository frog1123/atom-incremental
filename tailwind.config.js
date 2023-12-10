/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        glass: "#04060a60",
        border: "#252525"
      }
    }
  },
  plugins: []
};
