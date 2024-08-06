/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{  fontFamily: {
      rethink: ['"Rethink Sans"', 'sans-serif'],
      capitolium: ['Capitolium', 'serif'],
      sacramento: ['Sacramento', 'cursive'],
    },},
  },
  plugins: [],
}