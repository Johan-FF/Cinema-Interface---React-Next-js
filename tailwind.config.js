/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EAEAE1',
        'secondary': '#0F243D',
        'tertiary': '#B31312',
        'quaternary': '#F2BE22',
        'secondary-opacity': '#1e3d5e',
        'tertiary-opacity': '#DA5B54',
        'chair-occupied': '',
        'chair-preferential': '',
        'chair-general': '',
        'chair-free': '',
      },
      scrollbar: {
        track: 'secondary',
        thumb: 'secondary-opacity',
      },
      translate: {
        '100': '500%'
      },
      transitionDuration: {
        '2000': '2000ms',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
