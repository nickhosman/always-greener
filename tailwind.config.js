/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "oswald": ["Oswald", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        "comic-neue": ["Comic Neue", "cursive"],
      }
    },
  },
  plugins: [],
}
