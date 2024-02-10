

import colors from 'tailwindcss/colors'

export default {
  theme: {
    extend: {
      backgroundImage: {
        'eclipse': "url('../public/eclbg.svg')",
      },
      colors: {
        ...colors,
        'purpleAccent': '#603F8B'
      }
    }
  }
}
