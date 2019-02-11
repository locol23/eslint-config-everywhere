module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'sort-imports': ['error', {
      "ignoreDeclarationSort": true,
    }],
    semi: ['error', 'never'],
    'object-curly-newline': 0,
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 0,
    'comma-dangle': 0,
    'arrow-body-style': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
  }
}
