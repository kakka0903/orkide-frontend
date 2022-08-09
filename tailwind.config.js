/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'mono': 'DejaVuSansMono',
      'mono-bold': 'DejaVuSansMonoBold',
    },
    extend: {
      colors: {
        primary: "#0011FF",
        'primary-dark': "#1D3A8A",
        secondary: "#84CC16",
        'secondary-dark': "#5D9010",
      },
      screens:{
        'xs':'385px',
      }
    }
  },
  plugins: [],
}
