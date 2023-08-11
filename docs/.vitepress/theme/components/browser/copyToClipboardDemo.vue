<script setup lang="ts">
import { ref } from 'vue'
import { copyToClipboard } from 'utils-snap-fn'

const copyText = ref('Hello Javascript')
function copy() {
  copyToClipboard(copyText.value, () => alert('text copied success!'))
}
</script>

<template>
  <div class="flex place-items-center">
    <span>text to copy:</span>
    <input
      id="input"
      v-model.trim="copyText"
      placeholder="Enter sth..."
      type="text"
      autocomplete="true"
      class="flex-1 h-10 pl-3 ml-4 text-left bg-gray-700 dark:bg-gray-800 focus:border focus:border-dashed focus:border-teal-500 rounded outline-none"
    >
  </div>
  <button class="btn mt-2" @click="copy">
    COPY
  </button>
</template>
