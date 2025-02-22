/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e1c1c",
        secondary: "#9FA0A1",
      },
    },
  },
  plugins: [],
};
