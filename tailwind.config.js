module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       fontFamily: {
        body: ['Sarabun']
      },
      spacing: {
        '100': '28rem',
      }, 
      height:{
        'img-slider': '500px' 
      }
    },
  },
  variants: {
    extend: {},
    scrollbar: ['rounded']
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
