import turboPlugin from 'eslint-plugin-turbo'

/** @type {import("eslint").Linter.Config[]} */
export const turbo = [
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'error',
    },
  },
]
