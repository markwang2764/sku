// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    // 'no-shadow': 0,
    'no-param-reassign': 0,
    'no-alert': 0,
    'brace-style': 0,
    'prefer-const': 0,
    'new-cap': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
