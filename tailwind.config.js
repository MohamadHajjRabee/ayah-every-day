/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        width: {
          '0%': {width: '0'},
          '100%': {width: '100%'}
        }
      },
      animation: {
        width: 'width 2s ease-in'
      }
    },
    fontFamily: {
      aftikaLight: ['Aftika Light', "sans-serif"],
      amiriQuran :['Amiri Quran', 'sans-serif'],
    }
  },
  plugins: [],
}

