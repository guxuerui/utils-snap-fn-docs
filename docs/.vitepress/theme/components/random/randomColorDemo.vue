<script setup lang="ts">
import { computed, ref } from 'vue'
import { randomColor } from 'utils-snap-fn'

const type = ref('hex')
const opacity = ref(1)
const color = computed(() => {
  return randomColor(type.value, opacity.value)
})
</script>

<template>
  <div class="flex place-items-center">
    type:
    <input
      id="input"
      v-model.trim="type"
      placeholder="Enter email..."
      type="text"
      autocomplete="true"
      class="w-full h-10 pl-3 ml-8 text-left bg-gray-700 dark:bg-gray-800 focus:border focus:border-dashed focus:border-teal-500 rounded outline-none"
    >
  </div>
  <div class="flex place-items-center my-3">
    opacity:
    <input
      id="input"
      v-model.trim="opacity"
      placeholder="Enter email..."
      type="text"
      autocomplete="true"
      class="w-full h-10 pl-3 ml-3 text-left bg-gray-700 dark:bg-gray-800 focus:border focus:border-dashed focus:border-teal-500 rounded outline-none"
    >
  </div>
  <div>
    generated random color ->
    <span class="text-emerald-500 text-xl ml-2">{{ color }}</span>
  </div>
</template>
