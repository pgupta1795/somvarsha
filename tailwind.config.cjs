/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Lato: 'Lato',
        Merriweather: 'Merriweather',
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        secondary: 'var(--secondary-color)',
        primary: 'var(--primary-color)',
        card: '#d3d3d3',
        purple: 'var(--purple)',
        brown: 'var(--brown)',
        'sea-blue': 'var(--sea-blue)',
        'pink-dark': 'var(--pink-dark)',
        crimson: 'var(--crimson)',
      },
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.2em',
    },
  },
  plugins: [
    plugin(({ addBase }) => {
      addBase({
        html: { fontSize: '16px' },
      });
    }),
  ],
};
