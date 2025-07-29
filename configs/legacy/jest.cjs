module.exports = {
  overrides: [
    {
      env: {
        'jest/globals': true,
      },
      extends: ['plugin:jest/recommended'],
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      plugins: ['jest'],
    },
  ],
}
