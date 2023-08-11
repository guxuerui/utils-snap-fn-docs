<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { setScrollTop } from 'utils-snap-fn'

const inputVal = ref(0)

function go() {
  setScrollTop(inputVal.value)
}

onMounted(() => {
  go()
})
</script>

<template>
  <div>
    <input
      id="input"
      v-model.trim="inputVal"
      placeholder="Enter number..."
      type="text"
      autocomplete="true"
      class="w-full h-10 pl-3 mb-3 text-left bg-gray-700 dark:bg-gray-800 focus:border focus:border-dashed focus:border-teal-500 rounded outline-none"
      @keydown.enter="go"
    >
    <button class="btn mt-2" @click="go">
      GO
    </button>
  </div>
</template>
