<script setup lang="ts">
import { computed, ref } from 'vue'
import { randomNum } from 'utils-snap-fn'

const min = ref(0)
const max = ref(100)
const num = computed(() => {
  return randomNum(min.value, max.value)
})
</script>

<template>
  <div class="flex place-items-center">
    Min:
    <input
      id="input"
      v-model.trim="min"
      placeholder="Enter email..."
      type="text"
      autocomplete="true"
      class="w-full h-10 pl-3 ml-3 text-left bg-gray-700 dark:bg-gray-800 focus:border focus:border-dashed focus:border-teal-500 rounded outline-none"
    >
  </div>
  <div class="flex place-items-center my-3">
    Max:
    <input
      id="input"
      v-model.trim="max"
      placeholder="Enter email..."
      type="text"
      autocomplete="true"
      class="w-full h-10 pl-3 ml-3 text-left bg-gray-700 dark:bg-gray-800 focus:border focus:border-dashed focus:border-teal-500 rounded outline-none"
    >
  </div>
  <div>
    generated random number ->
    <span class="text-emerald-500 text-xl ml-2">{{ num }}</span>
  </div>
</template>
