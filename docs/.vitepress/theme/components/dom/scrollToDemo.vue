<script setup lang="ts">
import { ref } from 'vue'
import { scrollTo } from 'utils-snap-fn'

const top = ref(0)
const duration = ref(1)
function go() {
  scrollTo(top.value, duration.value)
}
</script>

<template>
  <div class="flex place-items-center">
    top:
    <input
      id="input"
      v-model.trim="top"
      placeholder="Enter number..."
      type="text"
      autocomplete="true"
      class="w-full h-10 pl-3 ml-10 text-left bg-gray-700 dark:bg-gray-800 focus:border focus:border-dashed focus:border-teal-500 rounded outline-none"
    >
  </div>
  <div class="flex place-items-center my-3">
    duration:
    <input
      id="input"
      v-model.trim="duration"
      placeholder="Enter number..."
      type="text"
      autocomplete="true"
      class="w-full h-10 pl-3 ml-3 text-left bg-gray-700 dark:bg-gray-800 focus:border focus:border-dashed focus:border-teal-500 rounded outline-none"
    >
  </div>
  <button class="btn mt-2" @click="go">
    GO
  </button>
</template>
