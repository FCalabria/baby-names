module.exports = {
  purge: ['./src/**/*.{js,jsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFF',
      black: '#000',
      yellow: {
        DEFAULT: '#FFC700'
      },
      pink: {
        DEFAULT: '#FFA7DA'
      },
      blue: {
        light: '#72A5FF',
        DEFAULT: '#5551FF'
      },
      green: {
        light: '#A6EFDE',
        DEFAULT: '#0FA958'
      },
      red: {
        light: '#FF8577',
        DEFAULT: '#FF4100'
      },
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
