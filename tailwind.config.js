/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        satoshi:['satoshi', 'san-serif']
      },
      colors: {
        black700: "#1e1e1e",
        black900: "#0d0d0d",

        grey100: "#b6bac4",
        grey200: "#1e1e1e",
        grey300: "#fafafa",
        grey400: "#e9e9e9",
        grey500: "#b9b9b9",
        grey600: "#4b4b4b",
        grey700: "#686868",
        grey800: "#2c2c2c",
        grey900: "#5a5a5a",

        violet50: "#ede9f1",
        violet200: "#aa9bbc",

        purple100: "#efe6fd",
        purple600: "#46266e",
        purple700: "#091135",
      },
    },
  },
  plugins: [],
};
