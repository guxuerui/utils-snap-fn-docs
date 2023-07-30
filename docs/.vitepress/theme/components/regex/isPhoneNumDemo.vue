<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { isPhoneNum } from 'utils-snap-fn'

const ifPhoneNum = ref()

const inputVal = ref(13345673241)

function reset() {
  ifPhoneNum.value = isPhoneNum(inputVal.value)
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
      placeholder="Enter phonenum..."
      type="text"
      autocomplete="true"
      class="w-full h-10 pl-3 mb-3 text-left bg-gray-700 dark:bg-gray-800 focus:border focus:border-dashed focus:border-teal-500 rounded outline-none"
      @keydown.enter="reset"
    >
    <div>
      Is this a phone number?
      <span class="text-emerald-500 text-xl ml-2">{{ ifPhoneNum }}</span>
    </div>
    <button class="btn mt-2" @click="reset">
      TEST
    </button>
  </div>
</template>
