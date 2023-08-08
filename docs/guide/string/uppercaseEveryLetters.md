---
titleTemplate: utils-snap-fn-docs
---

# uppercaseEveryLetters

**Definition**:

```js
/**
 * @param str The string to be processed.
 * @returns The string with all letters of each word capitalized.
 * @description Convert all letters of each word in the string to uppercase and return it.
**/
```

# Demo

<Box>
  <UppercaseEveryLettersDemo />
</Box>

# Usage Example

```ts
import { computed, ref } from 'vue'
import { uppercaseEveryLetters } from 'utils-snap-fn'

const inputVal = ref('hello world')

const convertedRes = computed(() => {
  return uppercaseEveryLetters(inputVal.value)
})
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/string/uppercaseEveryLetters.ts)