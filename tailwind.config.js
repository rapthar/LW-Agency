/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          900: '#1F5152',
        },
        orange: {
          500: '#FF7F38',
        },
      },
    },
  },
  plugins: [],
};
