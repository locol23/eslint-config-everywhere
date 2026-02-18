import vitestPlugin from 'eslint-plugin-vitest'

/** @type {import("eslint").Linter.Config[]} */
export const vitest = [
  {
    files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    plugins: {
      vitest: vitestPlugin,
    },
    rules: {
      ...vitestPlugin.configs.recommended.rules,
    },
  },
]
