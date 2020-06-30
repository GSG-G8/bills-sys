module.exports = {
  extends: ["airbnb", "airbnb/hooks", "prettier", "prettier/react"],
  // babel-eslint parser is used to support experimental features not supported in ESLint itself yet
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 11,
    ecmaFeatures: {
      impliedStrict: true, //enable global strict mode (if ecmaVersion is 5 or greater)
    },
  },
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    "promise/prefer-await-to-then": "error",
    "arrow-body-style": ["error", "as-needed"],
    "react/state-in-constructor": 0,
    //  allow .js extensions for JSX.
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    // configure the prettier plugin
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: true,
      },
    ],
  },
  plugins: ["react", "prettier", "promise"],
};
