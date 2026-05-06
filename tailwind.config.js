/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      cursive: ["Pacifico", "cursive"],
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
},

  plugins: [],
}
