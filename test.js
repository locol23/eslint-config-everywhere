module.exports = {
  env: {
    'jest/globals': true,
  },
  extends: ['plugin:jest/recommended'],
  plugins: ['jest', 'testing-library'],
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
}
