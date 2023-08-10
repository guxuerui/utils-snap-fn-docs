---
titleTemplate: utils-snap-fn-docs
---

# capitalsFirstLetter

**Definition**:

```js
/**
 * @param str - The string to be processed.
 * @returns The string with the first letter capitalized.
 * @description Convert the first letter of the string to uppercase and return it.
**/
```

# Demo

<Box>
  <CapitalsFirstLetterDemo />
</Box>

# Usage Example

```ts
import { computed, ref } from 'vue'
import { capitalsFirstLetter } from 'utils-snap-fn'

const inputVal = ref('hello')

const convertedRes = computed(() => {
  return capitalsFirstLetter(inputVal.value)
})
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/string/capitalsFirstLetter.ts)