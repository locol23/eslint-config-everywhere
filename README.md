# eslint-config-everywhere・[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

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

### React + TypeScript

```js
{
  "extends": [
    "everywhere",
    "everywhere/react",
    "everywhere/typescript"
  ]
}
```

### Jest

```js
{
  "extends": ["everywhere/jest"]
}
```

## Run ESLint

```
eslint /path/to/your_source
```

# Lisence

[MIT](LICENSE)
