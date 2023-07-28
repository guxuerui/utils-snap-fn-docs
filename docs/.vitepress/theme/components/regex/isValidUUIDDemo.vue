<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { generateUUID, isValidUUID } from 'utils-snap-fn'

const ifValidUUID = ref()

const inputVal = ref(generateUUID())

function reset() {
  ifValidUUID.value = isValidUUID(inputVal.value)
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
      placeholder="Enter UUID..."
      type="text"
      autocomplete="true"
      class="w-full h-10 pl-3 mb-3 text-left bg-gray-700 dark:bg-gray-800 focus:border focus:border-dashed focus:border-teal-500 rounded outline-none"
      @keydown.enter="reset"
    >
    <div>
      Is this a valid Id card number?
      <span class="text-emerald-600 text-xl ml-2">{{ ifValidUUID }}</span>
    </div>
    <button class="btn mt-2" @click="reset">
      TEST
    </button>
  </div>
</template>
