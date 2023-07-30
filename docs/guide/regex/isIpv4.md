---
titleTemplate: utils-snap-fn-docs
---

# isIpv4

**Definition**:

```js
/**
 * Determine whether the input string is a valid Ipv4 address
 * @param str String to be tested
 * @returns Return a boolean value, where true indicates it is a valid Ipv4 address, and false indicates it is not
*/
```

# Demo

<Box>
  <IsIpv4Demo />
</Box>

# Usage Example

```ts
import { onMounted, ref } from 'vue'
import { isIpv4 } from 'utils-snap-fn'

const ifIpv4 = ref()

const inputVal = ref('10.121.217.150')

function reset() {
  ifIpv4.value = isIpv4(inputVal.value)
}

onMounted(() => {
  reset()
})
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/regexp/isIpv4.ts)
