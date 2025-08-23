import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import perfectionistPlugin from 'eslint-plugin-perfectionist'
import promisePlugin from 'eslint-plugin-promise'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

/** @type {import("eslint").Linter.Config} */
export const base = [
  js.configs.recommended,
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/default': 'off',
      'import/namespace': 'off',
      'import/no-cycle': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: ['**/*.test.ts', '**/*.test.tsx'],
        },
      ],
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
      'import/no-useless-path-segments': 'error',
      'import/order': 'off', // perfectionistのsort-importsで代替
    },
  },
  eslintPluginUnicorn.configs.recommended,
  {
    languageOptions: {
      globals: globals.builtin,
    },
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
  },
  {
    plugins: {
      promise: promisePlugin,
    },
    rules: {
      ...promisePlugin.configs['flat/recommended'].rules,
    },
  },
  eslintConfigPrettier,
  {
    plugins: {
      perfectionist: perfectionistPlugin,
    },
  },
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      'no-console': 'error',
      'no-unused-vars': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'object',
            'type',
          ],
          ignoreCase: true,
          newlinesBetween: 'never',
          order: 'asc',
          type: 'alphabetical',
        },
      ],
      'perfectionist/sort-objects': [
        'error',
        {
          order: 'asc',
          type: 'natural',
        },
      ],
    },
  },
  {
    ignores: ['dist/**'],
  },
]
