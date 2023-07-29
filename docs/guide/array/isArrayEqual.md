---
titleTemplate: utils-snap-fn-docs
---

# isArrayEqual

**Definition**:

```js
/**
 * Determine if two arrays are equal (whether their elements are the same)
 * @param arr1 arr2 The arrays to compare
 * @returns Returns a boolean value: true for equal, false for not equal
 * @description First, check if the two arrays have the same reference, if so, return true directly
 * if either of the arrays is null or undefined, return false; if the lengths of the two arrays are different, return false;
 * finally, iterate through each element and compare, if any element is not equal, return false, otherwise return true
*/
```

# Demo

<Box>
  <IsArrayEqualDemo />
</Box>

# Usage Example

```js
import { onMounted, ref } from 'vue'
import { isArrayEqual } from 'utils-snap-fn'

const ifEauql = ref()

onMounted(() => {
  ifEauql.value = isArrayEqual([1, 2, 3], [1, 2, 3])
})
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/array/isArrayEqual.ts)