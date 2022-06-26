/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'mono': 'DejaVuSansMono',
      'mono-bold': 'DejaVuSansMonoBold',
    }
  },
  plugins: [],
}
