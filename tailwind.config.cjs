/** @type {import('tailwindcss').Config} */


const colors = require("tailwindcss/colors")




module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        background: colors.black,
        onbackground: colors.white,
        primary: colors.white,
        onprimary: colors.black,
        secondary: colors.gray,
        tertiary: colors.cyan,
      },
    },
  },
  plugins: [],
}
