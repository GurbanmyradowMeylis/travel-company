/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
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
