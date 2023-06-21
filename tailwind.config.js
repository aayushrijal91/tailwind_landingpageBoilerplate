/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,php}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#5687ca',
        'secondary': '#acce31'
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        faktum: ['Faktum', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

