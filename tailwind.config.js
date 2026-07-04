/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        ticker: "ticker 25s linear infinite",
      },
     
      keyframes: {
  ticker: {
    "0%": { transform: "translateX(-50%)" },
    "100%": { transform: "translateX(0)" },
  },
},
    },
  },
  plugins: [],
};