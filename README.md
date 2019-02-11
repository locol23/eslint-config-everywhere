# eslint-config-everywhere

ESLint config for everywhere

# Installation

```
yarn add -D eslint eslint-config-everywhere
```

# Usage

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

```js
{
  "extends": ["everywhere", "everywhere/typescript"]
}
```

## Run ESLint

```
eslint /path/to/your_source
```

# Lisence

MIT
