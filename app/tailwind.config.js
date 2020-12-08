module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          default: '#ededed',
          dark: '#c4c4c4',
          darker: '#383838',
        },
        green: {
          default: '#0ab463',
          dark: '#089954',
        },
      },
      spacing: {
        '2-5': '0.625rem', // 10px
        7: '1.875rem', // 30px
        13: '3.125rem', // 50px
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['focus'],
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
