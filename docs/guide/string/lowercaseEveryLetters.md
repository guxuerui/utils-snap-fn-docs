---
titleTemplate: utils-snap-fn-docs
---

# lowercaseEveryLetters

**Definition**:

```js
/**
 * @param str - The string to be processed.
 * @param locale - The locale or language of the region.
 * @returns The string with all letters of each word in lowercase.
 * @description Convert all letters of each word in the string to lowercase and return it.
**/
```

# Demo

<Box>
  <LowercaseEveryLettersDemo />
</Box>

# Usage Example

```ts
import { computed, ref } from 'vue'
import { lowercaseEveryLetters } from 'utils-snap-fn'

const inputVal = ref('THANK YOU VUE')

const convertedRes = computed(() => {
  return lowercaseEveryLetters(inputVal.value)
})

const convertedResOther = computed(() => {
  return lowercaseEveryLetters(inputVal.value, 'en')
})
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/string/lowercaseEveryLetters.ts)