---
titleTemplate: utils-snap-fn-docs
---

# randomUUID

**Definition**:

```js
/**
 * Generate a random UUID.
 * @returns A random UUID.
 * @description Generate a unique UUID using the current time and the Math.random() function.
 * The UUID consists of 32 hexadecimal characters and 4 hyphens.
*/
```

# Demo

<Box>
  <RandomUUIRDemo />
</Box>

# Usage Example

```ts
import { ref } from 'vue'
import { generateUUID } from 'utils-snap-fn'

const randomUUID = ref(generateUUID())
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/random/randomUUID.ts)