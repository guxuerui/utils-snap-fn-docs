---
titleTemplate: utils-snap-fn-docs
---

# scrollTo

**Definition**:

```js
/**
 * @param to - The position to scroll to.
 * @param duration - The duration of the scroll.
 * @description Scroll the scrollbar smoothly to the specified ${to} position within ${duration} time.
**/
```

# Demo

<Box>
  <ClientOnly>
    <ScrollToDemo />
  </ClientOnly>
</Box>

# Usage Example

```ts
import { ref } from 'vue'
import { scrollTo } from 'utils-snap-fn'

const top = ref(0)
const duration = ref(1)
function go() {
  scrollTo(top.value, duration.value)
}
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/dom/scrollTo.ts)