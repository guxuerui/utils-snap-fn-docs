---
titleTemplate: utils-snap-fn-docs
---

# isMobile

**Definition**:

```js
/**
 * Detect whether it is a mobile device
 * @returns Return a boolean value, where true indicates it is a mobile device, and false indicates it is not
*/
```

# Demo

<Box>
  <IsMobileDemo />
</Box>

# Usage Example

```ts
import { onMounted, ref } from 'vue'
import { isMobile } from 'utils-snap-fn'

const ifMobile = ref()

onMounted(() => {
  ifMobile.value = isMobile()
})
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/regexp/isMobile.ts)