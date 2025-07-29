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
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          Arg: true,
          arg: true,
          Args: true,
          args: true,
          Params: true,
          params: true,
          Props: true,
          props: true,
          Ref: true,
          ref: true,
        },
      },
    ],
  },
}
