/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': { display: 'none' }, // Untuk Chrome, Safari, dan Opera
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', // IE dan Edge
          'scrollbar-width': 'none', // Firefox
        },
      })
    },
  ],
}
