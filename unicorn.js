module.exports = {
  extends: 'plugin:unicorn/recommended',
  plugins: ['unicorn'],
  rules: {
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-null': 'off',
  },
}
