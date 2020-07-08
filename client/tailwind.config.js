const {
  colors: { white, gray, red, transparent },
} = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    inset: {
      0: 0,
      auto: 'auto',
      center: '33.3vh',
    },
    colors: {
      white,
      gray,
      black: '#242424',
      red,
      transparent,
      primary: {
        lighter: '#4dc1a1',
        default: '#00A779',
        dark: '#007555',
      },
      'mich-white': '#FFFCF9',
      'bg-main': '#FFFCF9',
      kournikova: { default: '#FFD44C', lighter: '#ffdd70', dark: '#ffc91a' },
      blueBell: { default: '#999BD2', lighter: '#adafdb', dark: '#8385c9' },
      blue: { default: '#1F7BCA', lighter: '#4c95d5', dark: '#1c6bb0' },
      magenta: { default: '#B76569', lighter: '#c58487', dark: '#ad5256' },
    },
    extend: {
      width: {
        '12/25': '48%',
        '8/25': '32%',
        '23/100': '23%',
      },
      height: {
        'half-screen': '50vh',
      },
    },
  },
};
