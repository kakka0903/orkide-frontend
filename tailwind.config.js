/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

// enables themed colors to work with tailwind opacity
function withOpacityValue (variable) {
  return ({ opacityValue }) => {
    return (opacityValue === undefined) ? `rgb(var(${variable}))` : `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  darkMode: 'class',
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
        primary: withOpacityValue('--primary'),
        'primary-dark': withOpacityValue('--primary-dark'),
        secondary: withOpacityValue('--secondary'),
        'secondary-dark': withOpacityValue('--secondary-dark'),
        background: withOpacityValue('--background')
      },
      fontFamily: {
        mono: ['DejaVuSansMono', ...defaultTheme.fontFamily.mono]
      }
    }
  },
  plugins: []
}
