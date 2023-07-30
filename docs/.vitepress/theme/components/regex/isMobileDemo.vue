<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { isMobile } from 'utils-snap-fn'

const ifMobile = ref()

onMounted(() => {
  ifMobile.value = isMobile()
})
</script>

<template>
  <div>
    Is this a mobile device?
    <span class="text-emerald-500 text-xl ml-2">{{ ifMobile }}</span>
  </div>
</template>
