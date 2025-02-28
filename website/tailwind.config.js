/** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
module.exports = 
{ content: 
[ "./src/**/*.{js,jsx,ts,tsx}", ],
    theme: {
      extend: {
        transform: {
          'rotateY-0': 'rotateY(0deg)',
          'rotateY-180': 'rotateY(180deg)',
        },
        perspective: {
          '1000': '1000px',
        },
        'backface-visibility': ['hidden'],
      },
    },
    plugins: [], }