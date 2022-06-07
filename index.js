module.exports = {
  extends: ['./unicorn.js', 'plugin:import/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['import', 'sort-keys-fix'],
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
    'newline-per-chained-call': 0,
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': 'error',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'never',
      },
    ],
    'no-console': 'error',
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
      },
    ],
    'no-unused-vars': 'off',
    'sort-imports': ['error'],
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: true }],
  },
}
