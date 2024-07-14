/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-300": "#bebee8",
        "primary-700": "#3a3a66",
        "primary-800": "#2a2a44",
        "primary-950": "#20202c",
        secondary: "#fdcca6",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
