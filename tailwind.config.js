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
        primary: '#0094F4',
        secondary: '#32C0EE',
        tertiary: "#2e2e2e",
        grey: '#636364',
        dark: '#2F2F2F',
        light: "#ECECEB",
      },
      fontFamily: {
        articulat: ["articulat-cf", "sans-serif"],
        "articulat-heavy": ["articulat-heavy-cf", "sans-serif"],
      }
    },
  },
  plugins: [],
}

