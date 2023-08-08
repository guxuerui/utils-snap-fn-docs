<script setup lang="ts">
import { computed, ref } from 'vue'
import { lowercaseEveryLetters } from 'utils-snap-fn'

const inputVal = ref('THANK YOU VUE')

const convertedRes = computed(() => {
  return lowercaseEveryLetters(inputVal.value)
})
</script>

<template>
  <div>
    <input
      id="input"
      v-model.trim="inputVal"
      placeholder="Enter sth..."
      type="text"
      autocomplete="true"
      class="w-full h-10 pl-3 mb-3 text-left bg-gray-700 dark:bg-gray-800 focus:border focus:border-dashed focus:border-teal-500 rounded outline-none"
    >
    <div>
      converted string:
      <span class="text-emerald-500 text-xl ml-2">{{ convertedRes }}</span>
    </div>
  </div>
</template>
