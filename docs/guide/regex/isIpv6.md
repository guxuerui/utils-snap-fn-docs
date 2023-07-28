---
titleTemplate: utils-snap-fn-docs
---

# isIpv6

**Definition**:

```js
/**
 * Determine whether the input string is a valid Ipv6 address
 * @param str String to be tested
 * @returns Return a boolean value, where true indicates it is a valid Ipv6 address, and false indicates it is not
*/
```

# Demo

<Box>
  <IsIpv6Demo />
</Box>

# Usage Example

```js
import { onMounted, ref } from 'vue'
import { isIpv6 } from 'utils-snap-fn'

const ifIpv6 = ref()

const inputVal = ref('2001:0db8:85a3:0000:0000:8a2e:0370:7334')

function reset() {
  ifIpv6.value = isIpv6(inputVal.value)
}

onMounted(() => {
  reset()
})
```

[Source Code](https://github.com/guxuerui/utils-snap-fn/blob/main/src/playground/regexp/isIpv6.ts)
