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
        'secondary-opacity': '#1e3d5e',
        'tertiary-opacity': '#DA5B54',
      },
    },
  },
  plugins: [],
}
