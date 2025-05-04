/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f2f5',
          100: '#d0d7e2',
          200: '#a3b3cc',
          300: '#7590b5',
          400: '#4b6c9e',
          500: '#355088',
          600: '#2a4070',
          700: '#1f3058',
          800: '#0F172A', // Primary dark blue
          900: '#091326',
        },
        gold: {
          50: '#fefaec',
          100: '#fdf2ca',
          200: '#fae697',
          300: '#f8d964',
          400: '#f5cb32',
          500: '#EAB308', // Primary gold
          600: '#c78f06',
          700: '#a47505',
          800: '#825c04',
          900: '#5f4303',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      boxShadow: {
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};