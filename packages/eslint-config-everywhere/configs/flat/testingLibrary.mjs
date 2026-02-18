import testingLibrary from 'eslint-plugin-testing-library'

/** @type {import("eslint").Linter.Config[]} */
export const testingLibraryReact = [
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    ...testingLibrary.configs['flat/react'],
  },
]
