/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-300': '#bebee8',
        'primary-700': '#3a3a66',
        'primary-800': '#2a2a44',
        'primary-950': '#20202c',
        'secondary': '#fdcca6'
      },
      borderWidth: {
        1: '1px',
      },
      height: {
        'd-screen': ['100vh', '100dvh']
      }
    },
  },
  plugins: [],
};
