/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontWeight: {

        'extra-light': '200', // Add a new custom weight

        'semi-bold': '600' // Customize existing weight
    },
  },
  plugins: [],
}
}

