module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      classes: true,
      modules: true
    },
    sourceType: 'module',
    'allowImportExportEverywhere': true,
  },
  plugins: ['eslint-plugin-react'],
  env: {
    browser: true,
    es6: true,
    node: true,
    amd: false,
    mocha: true,
    jasmine: false,
  },
  rules: {
    'indent': [2, 2],
    'no-console': 0,
    'react/jsx-uses-vars': 2,
    'linebreak-style': [2, 'unix'],
    quotes: [2, 'single'],
    semi: [2, 'always'],
  }
};
