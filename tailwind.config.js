/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        kumbh:['"Kumbh Sans"', ...defaultTheme.fontFamily.sans]
      },
      colors:{
        orange:{
          main:'hsl(26,100%, 55%)',
          pale: 'hsl(25,100%,94%)'
        },
        text:{

        },
        blue:{
          dark:'hsl(220,13%,13%)',
          darkgrey:'hsl(219,9%,45%)',
          lightgrey:'hsl(223,64%,98%)'
        },
        black: {
          lightbox: 'hsla(0, 0%, 0%, 0.75)',
          solid: '#000'
        }
      }
    },
  },
  plugins: [],
}

//fontweights 400 & 700