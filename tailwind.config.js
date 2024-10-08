/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      'sans': ['Be\\ Vietnam\\ Pro', 'sans-serif']
    },
    extend: {
      fontSize: {
        '3.5xl': '2rem'
      },
      letterSpacing: {
        'tight-md': '-0.03em'
      },
      lineHeight: {
        '11': '2.8rem'
      },
      colors: {
        red: 'hsl(12, 88%, 59%)',
        'red-pale': 'hsl(13, 100%, 96%)',
        'blue-dark': 'hsl(233, 12%, 13%)',
        blue: 'hsl(228, 39%, 23%)',
        'blue-gray': 'hsl(227, 12%, 61%)',
        gray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
}

