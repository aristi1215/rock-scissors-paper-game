/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'inner-box': 'inset 0px 5px 4px 1px rgba(0,0,0,0.2)',
      },
      colors: {
        'bg-gradient-light': 'hsl(214, 47%, 23%)',
        'bg-gradient-dark': 'hsl(237, 49%, 15%)',
        'bg-gradient': 'linear-gradient(from hsl(214, 47%, 23%) to hsl(237, 49%, 15%))',
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'scissors-gradient-light': 'hsl(39, 89%, 49%)',
        'scissors-gradient-dark': 'hsl(40, 84%, 53%)',
        'paper-gradient-light': 'hsl(230, 89%, 62%)',
        'paper-gradient-dark': 'hsl(230, 89%, 65%)',
        'rock-gradient-light': 'hsl(349, 71%, 52%)',
        'rock-gradient-dark': 'hsl(349, 70%, 56%)',
        'cyan-gradient-light': 'hsl(189, 59%, 53%)',
        'cyan-gradient-dark': 'hsl(189, 58%, 57%)'              
      }
    },
  },
  plugins: [],
}

