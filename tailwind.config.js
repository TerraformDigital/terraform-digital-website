/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-teal': '#00B4A6',
        'bright-teal': '#00D4C7', 
        'deep-teal': '#008B7F',
        'electric-teal': '#00F5E4',
        'rich-black': '#0F0F0F'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
};