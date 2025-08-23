# eslint-config-everywhere・[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

ESLint config for everywhere

> **Optimized for Modern Development**: This package uses ESLint v9+ flat config with the latest plugin versions and includes comprehensive configurations for TypeScript (using modern typescript-eslint), React, Next.js, Promise best practices, Vitest, Playwright, and Storybook. Perfect for BFF applications and frontend projects alike.

# Installation

```bash
pnpm i -D eslint eslint-config-everywhere
```

# Usage

## Flat Config (eslint.config.js) - Recommended

ESLint v9+ uses the flat config format with modern plugin integrations. **For most TypeScript projects, use the `recommended` configuration:**

### Recommended Configuration

```js
import { recommended } from 'eslint-config-everywhere/flat'

export default [...recommended]
```

This includes base rules, TypeScript rules, and testing configurations - perfect for TypeScript projects including BFF applications.

### Other Configurations

#### Base Configuration

```js
import { base } from 'eslint-config-everywhere/flat'

export default [...base]
```

#### React Configuration

```js
import { recommended, react } from 'eslint-config-everywhere/flat'
,
export default [...recommended, ...react]
```

#### TypeScript Configuration

```js
import { base, typescript } from 'eslint-config-everywhere/flat'

export default [...base, ...typescript]
```

#### Next.js Configuration

```js
import { recommended, next } from 'eslint-config-everywhere/flat'

export default [...recommended, ...next]
```

The `next` configuration automatically includes React rules (react, react-hooks, jsx-a11y plugins). React rules from both `recommended` and `next` will be applied, with `next` rules taking precedence where there are conflicts.

### Testing Configurations

```js
import {
  base,
  vitest,
  testingLibraryReact,
  playwright,
} from 'eslint-config-everywhere/flat'

export default [...base, ...vitest, ...testingLibraryReact, ...playwright]
```

### Storybook Configuration

```js
import { base, storybook } from 'eslint-config-everywhere/flat'

export default [...base, ...storybook]
```

### Next.js with TypeScript Configuration

```js
import { recommended, next } from 'eslint-config-everywhere/flat'

export default [...recommended, ...next]
```

The `next` configuration automatically includes React rules (react, react-hooks, jsx-a11y plugins). React rules from both `recommended` and `next` will be applied, with `next` rules taking precedence where there are conflicts.

### Available Configurations

- `base` - Core ESLint rules with import, perfectionist, promise, and unicorn plugins
- `react` - React and JSX accessibility rules with perfectionist JSX prop sorting
- `typescript` - TypeScript-specific linting rules using modern typescript-eslint with perfectionist object sorting
- `next` - Next.js recommended rules, core web vitals optimizations, and comprehensive React rules (includes react, react-hooks, jsx-a11y plugins)
- `node` - Node.js specific rules and global variables
- `vitest` - Vitest testing framework rules (replaces Jest)
- `playwright` - Playwright end-to-end testing rules
- `storybook` - Storybook-specific rules (v8.6.14 compatible)
- `testingLibraryReact` - Testing Library React rules
- `recommended` - Combines base, typescript, vitest, and playwright configurations (ideal for TypeScript projects including BFF applications)

## Legacy Config (.eslintrc)

In your ESLint config file, set the `extends` property:

## Configure

### Base

```js
{
  "extends": "everywhere"
}
```

### React

```js
{
  "extends": ["everywhere", "everywhere/react"]
}
```

### TypeScript

```json
{
  "extends": ["everywhere", "everywhere/typescript"]
}
```

### React + TypeScript

```json
{
  "extends": ["everywhere", "everywhere/react", "everywhere/typescript"]
}
```

### Test(Vitest + testing-library/react + Playwright)

```json
{
  "extends": [
    "everywhere/vitest",
    "everywhere/testing-library-react",
    "everywhere/playwright"
  ]
}
```

### Storybook

```json
{
  "extends": ["everywhere/storybook"]
}
```

### All

```json
{
  "extends": [
    "everywhere",
    "everywhere/react",
    "everywhere/typescript",
    "everywhere/vitest",
    "everywhere/testing-library-react",
    "everywhere/playwright",
    "everywhere/storybook"
  ]
}
```

## Run ESLint

```sh
eslint /path/to/your_source
```

# License

[MIT](LICENSE)
