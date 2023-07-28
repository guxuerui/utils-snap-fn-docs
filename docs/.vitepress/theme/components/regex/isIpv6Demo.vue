<script setup lang="ts">
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
</script>

<template>
  <div>
    <input
      id="input"
      v-model.trim="inputVal"
      placeholder="Enter Ipv4..."
      type="text"
      autocomplete="true"
      class="w-full h-10 pl-3 mb-3 text-left bg-gray-700 dark:bg-gray-800 focus:border focus:border-dashed focus:border-teal-500 rounded outline-none"
      @keydown.enter="reset"
    >
    <div>
      Is this a valid Id card number?
      <span class="text-emerald-600 text-xl ml-2">{{ ifIpv6 }}</span>
    </div>
    <button class="btn mt-2" @click="reset">
      TEST
    </button>
  </div>
</template>
