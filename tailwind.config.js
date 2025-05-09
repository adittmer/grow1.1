// tailwind.config.js
module.exports = {
  content: [
    "./index.html",         // Your main HTML file
    "./script.js",            // Any JS files using Tailwind classes
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        garden: {
          light: '#f0fdf4',
          DEFAULT: '#16a34a',
          dark: '#166534',
        }
      }
    },
  },
  plugins: [],
}
