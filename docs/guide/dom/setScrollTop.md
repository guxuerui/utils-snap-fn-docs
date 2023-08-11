---
titleTemplate: utils-snap-fn-docs
---

# setScrollTop

**Definition**:

```js
/**
 * Sets the scroll top position of the window.
 *
 * @param value - The value to set the scroll top position to.
 * @return This function does not return anything.
*/
```

# Demo

<Box>
  <SetScrollTopDemo />
</Box>

# Usage Example

```ts
import { onMounted, ref } from 'vue'
import { setScrollTop } from 'utils-snap-fn'

const inputVal = ref(0)

function go() {
  setScrollTop(inputVal.value)
}

onMounted(() => {
  go()
})
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/dom/setScrollTop.ts)