---
titleTemplate: utils-snap-fn-docs
---

# formatTimeLength

**Definition**:

```js
/**
 * Format time length.
 * @param timeLength The time length in seconds.
 * @returns The formatted time length.
 *
*/
```

# Demo

<Box>
  <ClientOnly>
    <UseFormatTimeLength />
  </ClientOnly>
</Box>

# Usage Example

```ts
import { ref } from 'vue'
import { formatTimeLength } from 'utils-snap-fn'

const example1 = ref(formatTimeLength(45))
const example2 = ref(formatTimeLength(310))
const example3 = ref(formatTimeLength(7383))
const example4 = ref(formatTimeLength(259200))
</script>

<template>
  <div>
    <p class="text-orange-400">
      Example1: {{ example1 }}
    </p>
    <p class="text-orange-400">
      Example2: {{ example2 }}
    </p>
    <p class="text-green-400">
      Example3: {{ example3 }}
    </p>
    <p class="text-green-400">
      Example4: {{ example4 }}
    </p>
  </div>
</template>
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/date/formatTimeLength.ts)
