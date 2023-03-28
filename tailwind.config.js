// /* eslint-env node */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', ...defaultTheme.fontFamily.sans],
        'pt-sans': ['PT Sans', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};
