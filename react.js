module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'plugin:react/recommended', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: { version: 'detect' },
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'react/prop-types': 'off',
    'react/jsx-boolean-value': 2,
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}
