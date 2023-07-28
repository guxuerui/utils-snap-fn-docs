<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { isEmail } from 'utils-snap-fn'

const ifValidEamil = ref()

const inputVal = ref('test@example.com')

function reset() {
  ifValidEamil.value = isEmail(inputVal.value)
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
      placeholder="Enter email..."
      type="text"
      autocomplete="true"
      class="w-full h-10 pl-3 mb-3 text-left bg-gray-700 dark:bg-gray-800 focus:border focus:border-dashed focus:border-teal-500 rounded outline-none"
      @keydown.enter="reset"
    >
    <div>
      Is this a valid email address?
      <span class="text-emerald-600 text-xl ml-2">{{ ifValidEamil }}</span>
    </div>
    <button class="btn mt-2" @click="reset">
      TEST
    </button>
  </div>
</template>
