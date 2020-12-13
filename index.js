module.exports = {
  extends: ['./unicorn.js', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': 0,
    'operator-linebreak': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'object-curly-newline': 0,
    'class-methods-use-this': 0,
    'max-len': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
  },
}
