# oxlint-config-everywhere [![npm version](https://img.shields.io/npm/v/oxlint-config-everywhere.svg)](https://www.npmjs.com/package/oxlint-config-everywhere) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/locol23/config-everywhere/blob/main/packages/oxlint-config-everywhere/LICENSE)

Sharable Oxlint config for everywhere

> **Fast, Opinionated Linting**: This package provides pre-composed Oxlint configuration files for TypeScript, React, Next.js, Vitest, Playwright, and Storybook projects. Designed to complement [eslint-config-everywhere](../eslint-config-everywhere/) for rules that Oxlint supports natively.

# Installation

```bash
pnpm i -D oxlint oxlint-config-everywhere
```

# Usage

Pass a config file to `oxlint` using the `--config` flag:

```bash
oxlint --config node_modules/oxlint-config-everywhere/configs/base.json
```

## Available Configurations

### Base Configuration

Core rules for TypeScript projects including import, unicorn, promise, jsdoc, oxc, and node rules.

```bash
oxlint --config node_modules/oxlint-config-everywhere/configs/base.json
```

### React Configuration

Extends base with React, JSX accessibility, and React performance rules.

```bash
oxlint --config node_modules/oxlint-config-everywhere/configs/react.json
```

### Next.js Configuration

Extends React with Next.js specific rules and core web vitals enforcement.

```bash
oxlint --config node_modules/oxlint-config-everywhere/configs/next.json
```

### Vitest Configuration

Vitest testing framework rules. Combine with a base config:

```bash
oxlint --config node_modules/oxlint-config-everywhere/configs/base.json --config node_modules/oxlint-config-everywhere/configs/vitest.json
```

### Playwright Configuration

Relaxes rules for Playwright test files (e.g., `no-empty-pattern` for destructured fixtures). Combine with a base config:

```bash
oxlint --config node_modules/oxlint-config-everywhere/configs/base.json --config node_modules/oxlint-config-everywhere/configs/playwright.json
```

### Storybook Configuration

Relaxes rules for Storybook story files (e.g., `react-hooks/rules-of-hooks`, `react-perf/*`). Combine with a React or Next.js config:

```bash
oxlint --config node_modules/oxlint-config-everywhere/configs/react.json --config node_modules/oxlint-config-everywhere/configs/storybook.json
```

## Configuration Hierarchy

```
base.json ← react.json ← next.json
```

- `base` - Core, TypeScript, import, unicorn, promise, jsdoc, oxc, node rules
- `react` - Extends base + React, JSX a11y, React performance rules
- `next` - Extends react + Next.js rules

Overlay configs (`vitest`, `playwright`, `storybook`) are combined with any of the above.

## Project Structure

```
oxlint-config-everywhere/
├── configs/          # Composed configurations (use these)
│   ├── base.json
│   ├── react.json
│   ├── next.json
│   ├── vitest.json
│   ├── playwright.json
│   └── storybook.json
└── rules/            # Individual rule sets (used internally by configs)
    ├── core.json
    ├── typescript.json
    ├── import.json
    ├── unicorn.json
    ├── promise.json
    ├── oxc.json
    ├── node.json
    ├── react.json
    ├── jsx-a11y.json
    ├── react-perf.json
    ├── nextjs.json
    └── vitest.json
```

## ESLint Parity

Some ESLint rules are not yet supported by Oxlint and require ESLint for full coverage:

- `perfectionist/*` (sort-imports, sort-objects, sort-jsx-props)
- `import/no-extraneous-dependencies`, `import/no-useless-path-segments`, `import/extensions`
- `unicorn/prevent-abbreviations`
- `react/destructuring-assignment`, `react/jsx-no-bind`, `react/no-unstable-nested-components`

Consider using [eslint-plugin-oxlint](https://www.npmjs.com/package/eslint-plugin-oxlint) to disable overlapping rules when running both ESLint and Oxlint.

# License

[MIT](LICENSE)
