module.exports = {
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s'],
      extends: ['plugin:playwright/playwright-test'],
    },
  ],
}
