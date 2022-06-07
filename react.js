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
  plugins: ['import', 'react', 'jsx-a11y'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    semi: ['error', 'never'],
    'class-methods-use-this': 0,
    'function-paren-newline': 0,
    'comma-dangle': 0,
    'max-len': 0,
    'implicit-arrow-linebreak': 0,
    'newline-per-chained-call': 0,
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/extensions': ['error', 'never', { json: 'always' }],
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'no-use-before-define': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'react/prop-types': 'off',
    'react/jsx-boolean-value': 2,
    'react/jsx-props-no-spreading': 'off',
    'react/no-danger': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.*', '**/*.test.*', '**/*.spec.*'],
        optionalDependencies: false,
      },
    ],
    'react/function-component-definition': 0,
  },
}
