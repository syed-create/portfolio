module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb',
        },
        primary: '#FF6363',
        secondary:{
        100: '#E2E2DF',
        200: '#888883'
        }
    }, 
    fontFamily: {
        'nunito': ['nunito', 'sans-serif'],
        'mosaic':['Palette Mosaic', 'cursive'],
        'script':['Style Script', 'cursive'],
        'windsong':['WindSong', 'cursive'],
        'amatic':['Amatic SC', 'cursive']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
