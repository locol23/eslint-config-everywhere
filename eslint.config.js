import { base, typescript, react, playwright, vitest, storybook, node } from './configs/flat/index.mjs'

export default [
  ...base,
  ...typescript,
  ...react,
  ...playwright,
  ...vitest,
  ...storybook,
  {
    files: ['tests/node/**/*.js'],
    ...node[0],
  },
  {
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.stories.*',
            '**/*.test.*',
            '**/*.spec.*',
            'tests/**/*',
          ],
          optionalDependencies: false,
          packageDir: '.',
        },
      ],
    },
  },
]
