/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'be-vietnam': ['Be Vietnam Pro', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'playfair': ['"Playfair Display"', 'serif'],
        'amatic': ['"Amatic SC"', 'cursive'],
      },
      colors: {
        'custom-blue': '#002d5b', 
        'custom-gray': '#35373a',
      },
      keyframes: {
        sb: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        sb: "sb 1s infinite alternate",
      },
    },
  },
  plugins: [],
}

