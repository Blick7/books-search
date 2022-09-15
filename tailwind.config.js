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
      maxWidth: {
        240: '60rem',
      },
    },
  },
  plugins: [],
};
