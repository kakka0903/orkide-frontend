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
        primary: colors.blue,
        secondary: colors.red,
      }
    }
  },
  plugins: [],
}
