/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: '#A68BFA',
        green: '#B9FD33',
        orange: '#FFD035',
        textPrimary: '#1D2633',
        textSecondary: '#1B232F',
        textGrey: '#A9A9A9',
        darkBtn: '#1D2633',
      },
    },
  },
  plugins: [],
};
