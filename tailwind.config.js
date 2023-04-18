/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  important: false,
  theme: {
    extend: {},
    fontFamily: {
      custom: ['My Custom light Font', 'air_lt'],
      customBold:['My Custom bold Font', 'air_bt']
    }
  },
  plugins: [],
}
