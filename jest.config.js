module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': 'vue-jest',
    // process `*.js` files with `babel-jest`
    '.*\\.(js)$': 'babel-jest'
  },
  verbose: true
}
