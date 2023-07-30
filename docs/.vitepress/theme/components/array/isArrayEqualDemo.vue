<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { isArrayEqual } from 'utils-snap-fn'

const ifEauql = ref()

onMounted(() => {
  ifEauql.value = isArrayEqual([1, 2, 3], [1, 2, 3])
})
</script>

<template>
  <div>
    <div>
      <p class="text-orange-400">
        const arr1  = [1, 2, 3]; const arr2 = [1, 2, 3]
      </p>
      Is this two array equal?
      <span class="text-emerald-500 text-xl ml-2">{{ ifEauql }}</span>
    </div>
  </div>
</template>
