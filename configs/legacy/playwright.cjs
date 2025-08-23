module.exports = {
  overrides: [
    {
      extends: ['plugin:playwright/playwright-test'],
      files: ['**/?(*.)+(spec|test).[jt]s'],
    },
  ],
}
