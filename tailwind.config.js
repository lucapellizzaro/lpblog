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
            '50': '#EDF2F4',
            '100': '#E2E7EB',
            '200': '#D6DCE1',
            '300': '#BFC6CD',
            '400': '#919AA5',
            '500': '#636E7D',
            '600': '#4C5869',
            '700': '#344155',
            '800': '#2E3548',
            '900': '#27293B',
        }
      }
    }
  },
  variants: {
    extend: {
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
