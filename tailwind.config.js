const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.tsx'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        cream: '#F2F1EF'
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
