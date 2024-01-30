/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    screens: {
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1400px",
    },
    colors: {
      "tomato": "hsl(4, 100%, 67%)",
      "slate-grey": "hsl(234, 29%, 20%)",
      "charcoal-grey": "hsl(235, 18%, 26%)",
      "grey": "hsl(231, 7%, 60%)",
      "white":  "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      "Roboto": ["Roboto", "sans-serif"],
    },
    extend: {
      gap: {
        "18": "4.5rem",
      },
      fontSize: {
        "6xl": "3.5rem",
        "4xl": "2.75rem",
      },
    },
  },
  plugins: [],
}
