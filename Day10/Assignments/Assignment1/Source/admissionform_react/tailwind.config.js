/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#15181D",
        // primary: "#363B45",
        secondary: "#35DDF9",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};