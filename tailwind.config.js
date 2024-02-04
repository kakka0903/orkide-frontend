/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'xs':'385px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#0011FF",
        'primary-dark': "#1D3A8A",
        secondary: "#84CC16",
        'secondary-dark': "#5D9010",
      },
      fontFamily: {
        'mono': ['DejaVuSansMono', ...defaultTheme.fontFamily.mono],
      },
    }
  },
  plugins: [],
}
