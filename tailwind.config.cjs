/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      width: {
        wrapper: "23.4375rem",
        button: "4.375rem",
        zero: "9.6875rem"
      },
      height: {
        wrapper: "41.6875rem",
        buttons: "27rem",
        button: "4.375rem",
      },
      padding: {
        35: "8.4375rem"
      },
      fontFamily: {
        calc: ["Inter", "sans-serif"],
      },
      fontSize: {
        button: "1.75rem"
      },
      boxShadow: {
        button: "-5px -5px 10px rgba(255, 255, 255, 0.5), 5px 5px 10px rgba(117, 127, 138, 0.5)",
      },
    },
  },
  plugins: [],
}
