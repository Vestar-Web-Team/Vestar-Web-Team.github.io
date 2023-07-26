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
        'primary-950': '#20202c',
        'secondary': '#fdcca6'
      },
      clipPath: {
        rhomboid: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
        'rhomboid-rect': 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        'd-screen': ['100vh', '100dvh']
      }
    },
  },
  plugins: [],
};
