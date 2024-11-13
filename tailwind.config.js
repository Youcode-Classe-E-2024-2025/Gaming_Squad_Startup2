/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./main.js", "./assets/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: '#2B2D42',          // Background Color   #2B2D42
        titre: '#EDF2F4',         // Light background color #EDF2F4
        sous: '#C7CAD1',          // Little titles  #C7CAD1
        red: '#EF233C',           // Button color #EF233C 
        orange:'#F04D0D',         //
        btnhover: '#D90429',      // Hover Color #D90429
    },
    fontFamily:{
      primary : ['Poppins', 'sans-serif'],
      logo : ['Permanent Marker', 'cursive'],
    }
    },
  },
  plugins: [],
}

