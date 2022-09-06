/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '15%': { transform: 'rotate(14.0deg)' },
          '30%': { transform: 'rotate(-8.0deg)' },
          '40%': { transform: 'rotate(14.0deg)' },
          '50%': { transform: 'rotate(-4.0deg)' },
          '60%': { transform: 'rotate(10.0deg)' },
          '70%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        fadeInOut: {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '20%': { opacity: '20' },
          '40%': { opacity: '40' },
          '60%': { opacity: '60' },
          '80%': { opacity: '80' },
          '100%': { opacity: '100' },
        }
      },
      animation: {
        wave: 'wave 2.5s infinite',
        fade: 'fadeInOut 5s ease-in-out infinite',
      },
    },
  },
  plugins: [require("daisyui")],
}
