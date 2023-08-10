---
titleTemplate: utils-snap-fn-docs
---

# removeDuplicatesObj

**Definition**:

```js
/**
 * Removes duplicate objects from an array based on a specified key.
 * @param arr - The array of objects to remove duplicates from.
 * @param key - The key to use as the basis for removing duplicates.
 * @returns An array of unique objects based on the specified key.
*/
```

# Demo

<Box>
  <RemoveDuplicatesObjDemo />
</Box>

# Usage Example

```ts
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { removeDuplicatesObj } from 'utils-snap-fn'

interface User {
  id: number
  name: string
}

const res: Ref<User[]> = ref()

const arr: User[] = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'John' },
  { id: 4, name: 'Bob' },
  { id: 5, name: 'Jane' },
]

onMounted(() => {
  res.value = removeDuplicatesObj(arr, 'name')
})
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/array/removeDuplicatesObj.ts)