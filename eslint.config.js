import { base, typescript, react, playwright, vitest, storybook, node, turbo, testingLibraryReact } from 'eslint-config-everywhere'

export default [
  ...base,
  ...typescript,
  ...react,
  ...playwright,
  ...vitest,
  ...storybook,
  ...testingLibraryReact,
  {
    files: ['tests/node/**/*.ts'],
    ...node[0],
  },
  {
    files: ['tests/turbo/**/*.ts'],
    ...turbo[0],
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
