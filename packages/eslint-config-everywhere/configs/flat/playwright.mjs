import playwrightPlugin from 'eslint-plugin-playwright'

/** @type {import("eslint").Linter.Config[]} */
export const playwright = [
  {
    files: ['**/*.spec.[jt]s', '**/e2e/**/*.[jt]s', '**/playwright/**/*.[jt]s'],
    ...playwrightPlugin.configs['flat/recommended'],
  },
]
