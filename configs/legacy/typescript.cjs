module.exports = {
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'prettier',
      ],
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json', './**/tsconfig.json'],
      },
      plugins: ['@typescript-eslint', 'typescript-sort-keys'],
      rules: {
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              '{}': false,
            },
          },
        ],
        '@typescript-eslint/explicit-module-boundary-types': ['error'],
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        'typescript-sort-keys/interface': ['error', 'asc', { natural: true }],
        'typescript-sort-keys/string-enum': ['error', 'asc', { natural: true }],
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    },
  ],
}
