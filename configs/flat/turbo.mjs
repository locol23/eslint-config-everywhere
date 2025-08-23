import turboPlugin from 'eslint-plugin-turbo'

export const turbo = [
  {
    plugins: {
      turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'error',
    },
  },
]
