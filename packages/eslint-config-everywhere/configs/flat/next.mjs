import pluginNext from '@next/eslint-plugin-next'
import { react } from './react.mjs'

/** @type {import("eslint").Linter.Config[]} */
export const next = [
  ...react,
  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
    },
  },
]
