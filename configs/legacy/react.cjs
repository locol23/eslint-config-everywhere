module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['import', 'react', 'jsx-a11y'],
  rules: {
    'class-methods-use-this': 0,
    'comma-dangle': 0,
    'function-paren-newline': 0,
    'implicit-arrow-linebreak': 0,
    'import/extensions': ['error', 'never', { json: 'always' }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.*', '**/*.test.*', '**/*.spec.*'],
        optionalDependencies: false,
      },
    ],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-use-before-define': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 0,
    'react/display-name': 0,
    'react/function-component-definition': 0,
    'react/jsx-boolean-value': 2,
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      2,
      {
        shorthandFirst: true,
      },
    ],
    'react/no-danger': 0,
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    semi: ['error', 'never'],
  },
  settings: {
    react: { version: 'detect' },
  },
}
