/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F16529',
        secondary: '#79B3C7',
        dark: {
          bg: '#1D1C1C',
        },
      },
    },
  },
  darkMode: 'class', // Enable dark mode with 'class' strategy
  plugins: [],
};
