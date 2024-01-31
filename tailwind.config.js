/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/views/**/*.{js,ts,jsx,tsx}",
    "./src/components/private/**/*.{js,ts,jsx,tsx}",
    "./src/components/public/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

