/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  important: false,
  theme: {
    extend: {},
    fontFamily: {
      custom: ['My Custom Font', 'air_lt'],
    }
  },
  plugins: [],
}
