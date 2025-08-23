import jsxA11y from 'eslint-plugin-jsx-a11y'
import perfectionistPlugin from 'eslint-plugin-perfectionist'
import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

/** @type {import("eslint").Linter.Config} */
export const react = [
  {
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
    },
  },
  {
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      perfectionist: perfectionistPlugin,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'import/extensions': [
        'error',
        'never',
        {
          json: 'always',
          mjs: 'always',
        },
      ],
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['**/*.stories.*', '**/*.test.*', '**/*.spec.*'],
          optionalDependencies: false,
        },
      ],
      'import/prefer-default-export': 'off',
      'no-use-before-define': 'off',
      'perfectionist/sort-jsx-props': [
        'error',
        {
          order: 'asc',
          type: 'natural',
        },
      ],
      'react/destructuring-assignment': 'error',
      'react/display-name': 'off',
      'react/function-component-definition': 'off',
      'react/jsx-boolean-value': 'error',
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/jsx-max-depth': ['error', { max: 5 }],
      'react/jsx-no-bind': [
        'error',
        {
          allowArrowFunctions: true,
          allowBind: false,
          allowFunctions: false,
          ignoreDOMComponents: true,
          ignoreRefs: true,
        },
      ],
      'react/jsx-no-script-url': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-props-no-spreading': 'error',
      'react/jsx-sort-props': 'off',
      'react/no-array-index-key': 'error',
      'react/no-danger': 'off',
      'react/no-unstable-nested-components': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
    },
    settings: {
      react: { version: 'detect' },
    },
  },
]
