module.exports = {
  overrides: [
    {
      extends: ['plugin:testing-library/react'],
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    },
  ],
}
