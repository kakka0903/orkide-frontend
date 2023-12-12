/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xs: '400px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        primary: '#F262FF',
        'primary-dark': '#AC47B4',
        secondary: '#84CC16',
        'secondary-dark': '#609313',
        background: '#130C14'
      },
      fontFamily: {
        mono: ['DejaVuSansMono', ...defaultTheme.fontFamily.mono]
      }
    }
  },
  plugins: []
}
