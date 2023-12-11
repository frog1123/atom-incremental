/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        glass: "#00000050",
        border: "#252525"
      },
      fontSize: {
        "2xs": "10px"
      }
    }
  },
  plugins: []
};
