/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    colors: {
      "mamun-bg": "#09090B",
      "mamun-text": "#CDCDCD",
      "mamun-std": "#EF4036"
    },

    fontFamily: {
      "allotrix-font": ['Poppins', 'sans-serif'],
      "allotrix-font-secondary": ['Montserrat', 'sans-serif']
    },
  },
  plugins: [],
}

