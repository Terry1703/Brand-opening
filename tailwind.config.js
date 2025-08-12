/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0F0F0F',
        rose: {
          600: '#E11D48',
          700: '#BE123C',
        },
        gray: {
          950: '#0A0A0A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};