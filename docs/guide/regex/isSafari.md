---
titleTemplate: utils-snap-fn-docs
---

# isSafari

**Definition**:

```js
/**
 * Juge if is Safari browser
 * @returns eturn a boolean value, where true represents it is a Safari browser, and false represents it is not
*/
```

# Demo

<Box>
  <IsSafariDemo />
</Box>

# Usage Example

```ts
import { onMounted, ref } from 'vue'
import { isSafari } from 'utils-snap-fn'

const ifSafari = ref()

onMounted(() => {
  ifSafari.value = isSafari()
})
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/regexp/isSafari.ts)