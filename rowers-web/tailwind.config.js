/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'rw-main':'#18355D',
        'rw-light':'#335E9E',
        'rw-cyan':'#4AC0DF'
      },
      fontFamily: {
        'Lato': ['Lato', 'serif'],
      }
    },
  },
  plugins: [],
}
