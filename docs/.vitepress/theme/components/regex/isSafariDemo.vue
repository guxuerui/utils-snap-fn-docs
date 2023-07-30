<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { isSafari } from 'utils-snap-fn'

const ifSafari = ref()

onMounted(() => {
  ifSafari.value = isSafari()
})
</script>

<template>
  <div>
    Is this Safari browser?
    <span class="text-emerald-500 text-xl ml-2">{{ ifSafari }}</span>
  </div>
</template>
