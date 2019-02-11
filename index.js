module.exports = {
  extends: ['./unicorn.js','prettier'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'no-console': 2,
    'prettier/prettier': 'error'
  }
}
