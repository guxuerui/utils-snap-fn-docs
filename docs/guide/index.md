---
titleTemplate: utils-snap-fn-docs
---

# Get Started

The `API Documentation` for [utils-snap-fn](https://github.com/guxuerui/utils-snap-fn).

> `utils-snap-fn` is **Front-end tool function code snippets with full `typescript` support**, have many useful functions. You can use these in `Vue`, `Svelte`, `React` files, try it!

# :building_construction: Installation

```bash
# npm
npm i utils-snap-fn -D

# yarn
yarn add utils-snap-fn -D

# pnpm
pnpm add utils-snap-fn -D
```

# :anchor: Usage Example

### 1. On-demand Import

```js
import { isPhoneNum } from 'utils-snap-fn'
```

### 2. Full Import

```js
import * as snapFn from 'utils-snap-fn'

// example
snapFn.isPhoneNum('18811112222') // true
snapFn.isPhoneNum('28811112222') // false
```

### 3. CDN

You can download the `utils-snap-fn.browser.js` file from the `lib` directory and use it directly.
It also supports CDN, so you can include it in your HTML file through the CDN link

```js
// <script src="./js/utils-snap-fn.browser.js"></script>

isPhoneNum('13344445555') // true
```

### 4. CJS

You can download the `utils-snap-fn.cjs.js` file from the `lib` directory and use it directly.
It is designed to be used in a Node.js environment, so you can import it in your Node.js code
