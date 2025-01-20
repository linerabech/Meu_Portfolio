/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#eb4283',
        'secondary': '#e791B1',
        'black': '#000',
        'background': {
          'primary': '#d3c3dc',
          'secondary': '#323946',
        }
      }
    },
  },
  plugins: [],
}

