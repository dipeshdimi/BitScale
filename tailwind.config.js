/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'max': '450px' },
        'sm': { 'max': '639px' },
        'md': { 'max': '767px' },
        'lg': { 'max': '1023px' },
      },
    },
  },
  plugins: [],
}
