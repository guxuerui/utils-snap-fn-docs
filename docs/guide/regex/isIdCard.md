---
titleTemplate: utils-snap-fn-docs
---

# isIdCard

**Definition**:

```js
/**
 * Determine whether the input string or number is an ID card number
 * @param str String or Number to be tested
 * @returns Return a boolean value, where true indicates it is a valid Id card number, and false indicates it is not
*/
```

# Demo

<Box>
  <IsIdCardDemo />
</Box>

# Usage Example

```ts
import { onMounted, ref } from 'vue'
import { isIdCard } from 'utils-snap-fn'

const ifIdCard = ref()

const inputVal = ref('13068219911101736X')

function reset() {
  ifIdCard.value = isIdCard(inputVal.value)
}

onMounted(() => {
  reset()
})
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/regexp/isIdCard.ts)
