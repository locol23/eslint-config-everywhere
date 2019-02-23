module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'react-hooks'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: { version: 'detect' },
  },
  plugins: ['react'],
  rules: {
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'react/prop-types': 'off',
    'react/jsx-boolean-value': 2,
    'react/destructuring-assignment': ['error', 'never'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warning'
  }
}
