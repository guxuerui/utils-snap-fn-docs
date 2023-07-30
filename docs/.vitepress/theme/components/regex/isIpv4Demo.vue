<script setup lang="ts">
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
      <span class="text-emerald-500 text-xl ml-2">{{ ifIpv4 }}</span>
    </div>
    <button class="btn mt-2" @click="reset">
      TEST
    </button>
  </div>
</template>
