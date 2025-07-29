module.exports = {
  extends: ['./unicorn.cjs', 'plugin:import/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['import', 'sort-keys-fix'],
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'class-methods-use-this': 0,
    'comma-dangle': 0,
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 0,
    'import/no-cycle': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.ts', '**/*.test.tsx'],
      },
    ],
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
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-console': 'error',
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
      },
    ],
    'no-unused-vars': 'off',
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    semi: ['error', 'never'],
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: true }],
  },
}
