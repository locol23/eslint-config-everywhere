import { base } from './base.mjs'
import { playwright } from './playwright.mjs'
import { typescript } from './typescript.mjs'
import { vitest } from './vitest.mjs'

/** @type {import("eslint").Linter.Config} */
export const recommended = [
  ...base,
  ...typescript,
  ...vitest,
  ...playwright,
]
