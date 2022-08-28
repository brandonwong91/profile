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
        fadeOut: {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        }
      },
      animation: {
        wave: 'wave 1.5s infinite',
        fade: 'fadeOut 3s ease-in-out infinite'
      },
    },
  },
  plugins: [require("daisyui")],
}
