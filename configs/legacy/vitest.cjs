module.exports = {
  overrides: [
    {
      extends: ['plugin:vitest/recommended'],
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    },
  ],
}
