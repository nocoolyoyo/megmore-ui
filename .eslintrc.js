module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': 'off',
    'indent': 'off'
  },
  parserOptions: {
    parser: 'typescript-eslint-parser',
    ecmaFeatures: {
      'jsx': true,
      'experimentalObjectRestSpread': true
    }
  }
}
