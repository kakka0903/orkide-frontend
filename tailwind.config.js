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
        primary: '#0011FF',
        'primary-dark': '#1D3A8A',
        secondary: '#84CC16',
        'secondary-dark': '#5D9010',
        background: '#221F1F'
      },
      fontFamily: {
        mono: ['DejaVuSansMono', ...defaultTheme.fontFamily.mono]
      }
    }
  },
  plugins: []
}
