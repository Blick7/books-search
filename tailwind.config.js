/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        240: '60rem',
      },
      height: {
        120: '30rem',
        136: '34rem',
      },
      maxWidth: {
        240: '60rem',
        440: '110rem',
      },
    },
  },
  plugins: [],
};
