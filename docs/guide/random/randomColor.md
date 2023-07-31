---
titleTemplate: utils-snap-fn-docs
---

# randomColor

**Definition**:

```js
/**
 * @returns Randomly generated color value
 * @param type Type of color to generate, 'hex' or 'rgb'
 * @param opacity Opacity value
 * @description Generate a random hexadecimal color value or rgba color
*/
```

# Demo

<Box>
  <RandomColorDemo />
</Box>

# Usage Example

```ts
import { computed, ref } from 'vue'
import { randomColor } from 'utils-snap-fn'

const hexColor = computed(() => {
  return randomColor('hex')
})

const rgbColor = computed(() => {
  return randomColor('rgb', 0.8)
})
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/random/randomColor.ts)