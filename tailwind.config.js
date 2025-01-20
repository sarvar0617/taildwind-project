/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily:{
        kanit:['Kanit'],
        ubunto:['ubunto', 'sans-serif'],
      },
      colors: {
        customBlue: '#6EAEE3',  
    },
  },
  plugins: [],
}

}