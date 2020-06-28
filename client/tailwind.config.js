const {
  colors: { white, gray, black, red },
} = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    colors: {
      white,
      gray,
      black,
      red,
      primary: {
        lighter: '#4dc1a1',
        default: '#00A779',
        dark: '#007555',
      },
      'mich-white': '#FFFCF9',
      kournikova: { default: '#FFD44C', lighter: '#ffdd70' },
      blueBell: { default: '#999BD2', lighter: '#adafdb' },
      blue: { default: '#1F7BCA', lighter: '#4c95d5' },
      magenta: { default: '#B76569', lighter: '#c58487' },
    },
  },
};
