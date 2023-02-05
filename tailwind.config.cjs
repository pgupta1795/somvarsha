/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const daisyui = require('daisyui');

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
        'primary-light': 'var(--primary-light-color)',
        'primary-dark': 'var(--primary-dark-color)',
        card: '#d3d3d3',
        purple: 'var(--purple)',
        yellow: 'var(--yellow)',
        'sea-blue': 'var(--sea-blue)',
        'pink-dark': 'var(--pink-dark)',
        crimson: 'var(--crimson)',
        'gray-light': 'var(--gray-light)',
        'gray-dark': 'var(--gray-dark)',
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
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ffa541',
          secondary: '#152a36',
          accent: '#2c16aa',
          neutral: '#2D2031',
          'base-100': '#FAFAFA',
          info: '#307DD5',
          success: '#55D889',
          warning: '#E59E06',
          error: '#F03B24',
        },
      },
    ],
  },
};
