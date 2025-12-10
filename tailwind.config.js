/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'navy': '#0a1a33',
        'bright-red': '#e53935',
        'soft-red': '#ff6a5c',
      },
    },
  },
  plugins: [],
};
