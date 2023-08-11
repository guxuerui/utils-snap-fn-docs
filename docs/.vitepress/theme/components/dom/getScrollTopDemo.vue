<script setup lang="ts">
import { computed } from 'vue'
import { getScrollTop } from 'utils-snap-fn'

const fromTopValue = computed(() => {
  return getScrollTop()
})
</script>

<template>
  <div>
    <div>
      from document top value:
      <span class="text-emerald-500 text-xl ml-2">{{ fromTopValue }}</span>
    </div>
  </div>
</template>
