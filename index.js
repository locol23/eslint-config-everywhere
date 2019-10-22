module.exports = {
  extends: ['./unicorn.js', 'prettier'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 2,
    'unicorn/prevent-abbreviations': 'off',
  },
}
