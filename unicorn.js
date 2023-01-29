module.exports = {
  env: {
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
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
          Arg: true,
          arg: true,
          Args: true,
          args: true,
          Props: true,
          props: true,
          Params: true,
          params: true,
          Ref: true,
          ref: true,
        },
      },
    ],
  },
}
