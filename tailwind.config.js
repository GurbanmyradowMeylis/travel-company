/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#EAE8E8",
        "secondary-color": "#1E1E1E",
        "accent-color": "#C5C5C5",
        nav_color: "#767679",
      },
      fontFamily: {
        Lato_Black: ["Lato-Black", "cursive"],
        Cardo_Bold: ["Cardo-Bold", "cursive"],
        Lato_Regular: ["Lato-Regular", "cursive"],
      },
    },
  },
  plugins: [],
};
