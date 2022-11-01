/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "200px",
        md: "768px",
        lg: "1440px",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "15%": { transform: "rotate(14.0deg)" },
          "30%": { transform: "rotate(-8.0deg)" },
          "40%": { transform: "rotate(14.0deg)" },
          "50%": { transform: "rotate(-4.0deg)" },
          "60%": { transform: "rotate(10.0deg)" },
          "70%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        fadeInOut: {
          "0%": { opacity: 0, transform: "translateY(-400%)" },
          "20%": { opacity: 1, transform: "translateY(-300%)" },
          "40%": { opacity: 1, transform: "translateY(-200%)" },
          "60%": { opacity: 1, transform: "translateY(-100%)" },
          "80%": { opacity: 1, transform: "translateY(0%)" },
          "100%": { opacity: 0, transform: "translateY(0%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(1.03)" },
          "20%": { opacity: "20", transform: "scale(1.025)" },
          "40%": { opacity: "40" },
          "60%": { opacity: "60" },
          "80%": { opacity: "80" },
          "100%": { opacity: "100", transform: "scale(1)" },
        },
      },
      animation: {
        wave: "wave 3s infinite",
        fade: "fadeInOut 10s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
};
