import tseslint from 'typescript-eslint'

/** @type {import("eslint").Linter.Config} */
export const typescript = tseslint.config(tseslint.configs.recommended)
