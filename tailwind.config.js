/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
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
