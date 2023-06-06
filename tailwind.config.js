/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f8ff",
          100: "#e0f0fe",
          200: "#b9e2fe",
          300: "#7ccbfd",
          400: "#36b2fa",
          500: "#0c98eb",
          600: "#0071bd", //  main
          700: "#015fa3",
          800: "#065186",
          900: "#0b446f",
          950: "#072b4a",
        },
      },
    },
  },
  plugins: [],
};
