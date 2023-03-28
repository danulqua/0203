// /* eslint-env node */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,vue}'],
  theme: {
    extend: {
      screens: {
        xs: '460px'
      },
      fontFamily: {
        sans: ['Arial', ...defaultTheme.fontFamily.sans],
        'pt-sans': ['PT Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        brandyellow: {
          300: '#FFFBC8',
          900: '#FDD639'
        },
        brandgreen: {
          700: '#B1E19B'
        },
        brandblue: {
          100: '#F2FBFF',
          700: '#ACE2F8',
          800: '#73B4D5',
          900: '#005DA1'
        },
        brandgray: {
          10: '#80808010',
          50: '#33333320',
          100: '#F2F2F2',
          200: '#DADADA',
          300: '#C4CBCF',
          400: '#808080'
        },
        branddark: {
          900: '#333333'
        }
      },
      transitionProperty: {
        width: 'width'
      },
      animation: {
        'grow-width': 'grow-width 1s ease-in-out forwards'
      },
      keyframes: {
        'grow-width': {
          '0%': { width: '0' }
        }
      }
    }
  },
  plugins: []
};
