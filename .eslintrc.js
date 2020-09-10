module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: ['eslint:recommended', 'plugin:vue/recommended'],

  plugins: ['vue', 'jest'],

  rules: {
    semi: [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/singleline-html-element-content-newline': 'off',
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'indent': ['error', 2],
    'quotes': ['error', 'single']
  }
}
