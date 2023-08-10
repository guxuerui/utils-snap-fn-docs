---
titleTemplate: utils-snap-fn-docs
---

# isEmail

**Definition**:

```js
/**
 * Detect whether it is a valid email address
 * @param str - Email address to be tested
 * @returns Return a boolean value, where true indicates it is a valid email address, and false indicates it is not
*/
```

# Demo

<Box>
  <IsEmailDemo />
</Box>

# Usage Example

```ts
import { onMounted, ref } from 'vue'
import { isEmail } from 'utils-snap-fn'

const ifValidEamil = ref()

const inputVal = ref('test@example.com')

function reset() {
  ifValidEamil.value = isEmail(inputVal.value)
}

onMounted(() => {
  reset()
})
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/regexp/isEmail.ts)