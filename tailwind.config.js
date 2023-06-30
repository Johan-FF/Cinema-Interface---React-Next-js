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
        'primary': '#EAEAE1',
        'secondary': '#0F243D',
        'tertiary': '#B31312',
        'quaternary': '#F2BE22',
        'secondary-opacity': '#1e3d5e',
        'tertiary-opacity': '#DA5B54',
      },
      scrollbar: {
        track: 'secondary',
        thumb: 'secondary-opacity',
      },
      translate: {
        '100': '500%'
      },
      transitionDuration: {
        '4000': '4000ms',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
