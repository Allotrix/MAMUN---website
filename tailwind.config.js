/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},

    colors: {
      "mamun-green": "#02E29E",
      "mamun-light-blue": "#36B7FE",
      "mamun-blue": "#1749DC",
      white: "#ffffff",
      transparent: "#000000",
      orange: "#FF4F00",
    },

    fontFamily: {
      "mamun-font": ["Poppins", "sans-serif"],
      "mamun-font-secondary": ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
