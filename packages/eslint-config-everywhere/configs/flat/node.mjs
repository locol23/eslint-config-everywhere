import pluginN from 'eslint-plugin-n'
import globals from 'globals'

/** @type {import("eslint").Linter.Config[]} */
export const node = [
  pluginN.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]
