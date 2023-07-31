---
titleTemplate: utils-snap-fn-docs
---

# randomNum

**Definition**:

```js
/**
 * Generate a random number within a specified range.
 * @param min The minimum value of the range.
 * @param max The maximum value of the range.
 * @returns The generated random number within the specified range.
 * @description Generate a random number within the specified range [min, max].
*/
```

# Demo

<Box>
  <RandomNumDDemo />
</Box>

# Usage Example

```ts
import { computed, ref } from 'vue'
import { randomNum } from 'utils-snap-fn'

const min = ref(0)
const max = ref(100)
const num = computed(() => {
  return randomNum(min.value, max.value)
})
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/random/randomNum.ts)