/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{vue,js,ts,tsx,jsx}", "./src/**/*.{vue,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
