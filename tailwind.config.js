/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: 'hsl(252,100%,62%)',
        purple: 'hsl(252,100%,84%)',
        rose: 'hsl(252,100%,96%)',
        'brown-300': 'hsl(0,0%,20%)',
        'brown-200': 'hsl(0,0%,45%)',
        'brown-100': 'hsl(0,0%,85%)',
        'white-200': 'hsl(0,0%,98%)',
        'white-100': 'hsl(0,0%,100%)',
        red: 'hsl(0,100%,61%)',
      },
      fontSize: {
        sm: '.9rem',
       
      },
      boxShadow: {
        'custom': '0 10px 30px rgba(0, 0, 0, 0.15)', // Extend the shadow upwards
      },
    },
  },
  plugins: [],
};
