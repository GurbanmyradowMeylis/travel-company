/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/main.js"],
  theme: {
    extend: {
      screens: {
        "2xl": "1537px",
        xl: "1045px",
      },
      colors: {
        "primary-color": "#EAE8E8",
        "secondary-color": "#1E1E1E",
        "accent-color": "#C5C5C5",
        "nav-color": "#767679",
      },
      fontFamily: {
        "Lato-Black": ["Lato-Black", "sans-serif"],
        "Cardo-Bold": ["Cardo-Bold", "serif"],
        "Lato-Regular": ["Lato-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
