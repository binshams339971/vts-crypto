/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["pages", "components"].map(folder => `${folder}/**/*.{tsx,jsx}`),
  theme: {
    extend: {
      colors: {
          custom: {
              DEFAULT: '#DEDDEE',
          }
      }
    } 
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
  },
  prefix: 't-'
}
