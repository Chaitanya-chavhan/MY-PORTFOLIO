/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          500: '#800000',
          700: '#5c0000',
          800: '#4a0000',
          900: '#330000',
        },
      },
    },
  },
  plugins: [],
}
