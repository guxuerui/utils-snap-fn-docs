---
titleTemplate: utils-snap-fn-docs
---

# isPhoneNum

**Definition**:

```js
/**
 * Determine whether the input string or number is a phone number
 * @param v - The string or number to be determined
 * @returns Return a boolean value, where true represents it is a phone number, and false represents it is not
*/
```

# Demo

<Box>
  <IsPhoneNumDemo />
</Box>

# Usage Example

1. For Number
```ts
import { onMounted, ref } from 'vue'
import { isPhoneNum } from 'utils-snap-fn'

const ifPhoneNum = ref()

onMounted(() => {
  ifPhoneNum.value = isPhoneNum(13345673241) // true
})
```

2. For String
```js
import { onMounted, ref } from 'vue'
import { isPhoneNum } from 'utils-snap-fn'

const ifPhoneNum = ref()

onMounted(() => {
  ifPhoneNum.value = isPhoneNum('133456732412') // false
})
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/regexp/isPhoneNum.ts)