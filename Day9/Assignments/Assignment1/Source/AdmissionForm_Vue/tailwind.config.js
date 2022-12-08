/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#398c56",
        secondary: "#4c5f6e",
      },
    },
  },
  plugins: [],
};
