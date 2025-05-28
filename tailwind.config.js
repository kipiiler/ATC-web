/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jura: ['Jura', 'sans-serif'],
        judson: ['Judson', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 40s linear infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
      },
    },
  },
  safelist: [
    'blur-3xl',
    'blur-2xl',
    'blur-[120px]',
    'top-[60%]',
    'left-[10%]',
    'bottom-1/4',
    'top-1/3',
    'left-1/4',
    'right-1/3',
  ],
  plugins: [],
};