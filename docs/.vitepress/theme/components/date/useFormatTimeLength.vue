<script setup lang="ts">
import { ref } from 'vue'
import { formatTimeLength } from 'utils-snap-fn'

const example1 = ref(formatTimeLength(45))
const example2 = ref(formatTimeLength(310))
</script>

<template>
  <div>
    <p class="text-green-400">
      Example1: {{ example1 }}
    </p>
    <p class="text-green-400">
      Example2: {{ example2 }}
    </p>
  </div>
</template>
