/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        satisfy: ['Satisfy', 'sans-serif'],
        roboto: ['Roboto Condensed', 'sans-serif'],
        londrina: ['Londrina Solid', 'sans-serif']
      }
    }
  },
  plugins: []
}
