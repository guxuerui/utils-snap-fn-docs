---
titleTemplate: utils-snap-fn-docs
---

# uppercaseEveryWord

**Definition**:

```js
/**
 * @param str The string to be processed.
 * @returns The string with the first letter of each word capitalized.
 * @description Convert the first letter of each word in the string to uppercase and return it.
**/
```

# Demo

<Box>
  <UppercaseEveryWordDemo />
</Box>

# Usage Example

```ts
import { computed, ref } from 'vue'
import { uppercaseEveryWord } from 'utils-snap-fn'

const inputVal = ref('hello world')

const convertedRes = computed(() => {
  return uppercaseEveryWord(inputVal.value)
})
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/string/uppercaseEveryWord.ts)