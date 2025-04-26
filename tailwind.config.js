/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    colors: {
      brown : "#53423e",
      lightBrown : "#645550",
      darkBrown : "#2c2523",
      black : "#1e1917",
      white : "#f1e1d9",
      cyan : "#15d1e9",
      lightCyan : "#88e5f0",
      darkCyan : "#009fb3",
      orange : "#fb9718",
      lightOrange : "#fac27b",
      darkOrange : "#"
    },
    extend: {
      rotate:{
        'y-180':'180deg'
      }
    },
    fontFamily:{
      body: ['Josefin Sans'],
      special: ['Roboto'],
    },
    screens:{
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
    },
  },
  plugins: [],
}

