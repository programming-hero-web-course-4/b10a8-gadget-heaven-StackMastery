/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary' : 'rgba(149, 56, 226, 1)',
        'off-white': 'rgba(11, 11, 11, 0.7)',
        'text-color': '#09080F'
      },
      fontFamily:{
        'primary' : 'Sora'
      },
      width:{
        'primary' : '1240px'
      }
    },
  },
  plugins: [],
}

