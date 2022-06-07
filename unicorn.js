module.exports = {
  extends: 'plugin:unicorn/recommended',
  plugins: ['unicorn'],
  rules: {
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          Args: true,
          args: true,
          Props: true,
          props: true,
          Params: true,
          params: true,
        },
      },
    ],
  },
}
