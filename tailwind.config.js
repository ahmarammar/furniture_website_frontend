/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(min-height: 500px)' },
        // => @media (min-height: 500px) { ... }
      }
    },
  },
  plugins: [],
}
