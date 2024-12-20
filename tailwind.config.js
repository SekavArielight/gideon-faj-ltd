/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        CloverGrotesk: [ 'CloverGrotesk', 'sans-serif']
      },
      colors: {
        homeBlack: "#000000",
        brandcolor: "#ddff00",
        aboutBlack: "#181818",
        cardBlack: "#0d0d0d",
      },
    },
  },
  plugins: [],
}