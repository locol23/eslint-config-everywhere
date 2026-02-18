import storybookPlugin from 'eslint-plugin-storybook'

/** @type {import("eslint").Linter.Config[]} */
export const storybook = [
  {
    files: ['**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    plugins: {
      storybook: storybookPlugin,
    },
    rules: {
      ...storybookPlugin.configs.recommended.rules,
    },
  },
]
