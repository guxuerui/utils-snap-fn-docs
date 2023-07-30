---
titleTemplate: utils-snap-fn-docs
---

# isValidUUID

**Definition**:

```js
/**
 * Determine whether the input string is a valid UUID
 * @param str String to be tested
 * @returns Return a boolean value, where true indicates it is a valid UUID, and false indicates it is not
*/
```

# Demo

<Box>
  <IsValidUUIDDemo />
</Box>

# Usage Example

```ts
import { onMounted, ref } from 'vue'
import { generateUUID, isValidUUID } from 'utils-snap-fn'

const ifValidUUID = ref()

const inputVal = ref(generateUUID())

function reset() {
  ifValidUUID.value = isValidUUID(inputVal.value)
}

onMounted(() => {
  reset()
})
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/regexp/isValidUUID.ts)
