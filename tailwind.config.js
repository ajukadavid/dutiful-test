

import colors from 'tailwindcss/colors'

export default {
  theme: {
    fontFamily: {
      recoleta: ["Recoleta"],
    },
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
