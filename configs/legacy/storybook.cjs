module.exports = {
  overrides: [
    {
      extends: ['plugin:storybook/recommended'],
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
    },
  ],
}
