/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1080px",
      "2xl": "1344px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {},
      borderRadius: {},
      backgroundImage: {},
      fontSize: {},
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
