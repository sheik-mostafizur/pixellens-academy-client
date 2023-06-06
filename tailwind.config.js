/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e9fbff",
          100: "#cef5ff",
          200: "#a7f0ff",
          300: "#6bebff",
          400: "#26daff",
          500: "#00b6ff",
          600: "#008cff",
          700: "#0071ff",
          800: "#0061e6",
          900: "#0056b3",
          950: "#003366", // #003366 main
        },
      },
    },
  },
  plugins: [],
};
