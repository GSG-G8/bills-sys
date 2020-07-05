module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  root: true,
  extends: ['airbnb-base', 'prettier', 'plugin:jest/all'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'promise/prefer-await-to-then': 'error',
    // disables the windows/unix linebreak checks for anyone who will have to use windows
    'linebreak-style': 0,
    'arrow-body-style': ['error', 'as-needed'],
    // configure the prettier plugin
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
      },
    ],
    'jest/no-hooks': [
      'error',
      {
        allow: ['beforeAll', 'afterAll'],
      },
    ],
  },
  plugins: ['prettier', 'jest', 'promise'],
};
