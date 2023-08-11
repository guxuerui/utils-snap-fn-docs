---
titleTemplate: utils-snap-fn-docs
---

# getScrollTop

**Definition**:

```js
/**
 * @returns The distance from the top to the current position.
 * @description Get the distance from the top to the current position.
**/
```

# Demo

<Box>
  <ClientOnly>
    <GetScrollTopDemo />
  </ClientOnly>
</Box>

# Usage Example

```ts
import { computed } from 'vue'
import { getScrollTop } from 'utils-snap-fn'

const fromTopValue = computed(() => {
  return getScrollTop()
})
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/dom/getScrollTop.ts)