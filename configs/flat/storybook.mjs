import storybookPlugin from 'eslint-plugin-storybook'

export const storybook = [
  {
    files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    plugins: {
      storybook: storybookPlugin,
    },
    rules: {
      ...storybookPlugin.configs.recommended.rules,
    },
  },
]
