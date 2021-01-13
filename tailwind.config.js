const { white } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        colors: {
          transparent: 'transparent',
          white: 'white',
          current: 'currentColor',
          gray: colors.trueGray,
          blue: colors.lightBlue,
          pink: colors.pink,
          yellow: colors.amber,
          brand: {
            '100': '#EDF2F4',
            '200': '#A9A9B1',
            '300': '#7D7F8A',
            '400': '#525463',
            '500': '#27293B',
            '600': '#1D1F2D',
        }
      }
    }
  },
  variants: {
    extend: {
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
    },
  },
  plugins: [],
}
