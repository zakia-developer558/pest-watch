/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slider: 'slider 20s linear infinite',
      },
      keyframes: {
        slider: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/postcss')
    
  ],
}