<script setup lang="ts">
import { ref } from 'vue'
import { formatTimeLength } from 'utils-snap-fn'

const example1 = ref(formatTimeLength(45))
const example2 = ref(formatTimeLength(310))
const example3 = ref(formatTimeLength(7383))
const example4 = ref(formatTimeLength(259200))
</script>

<template>
  <div>
    <p class="text-green-400">
      Example1: {{ example1 }}
    </p>
    <p class="text-green-400">
      Example2: {{ example2 }}
    </p>
    <p class="text-green-400">
      Example3: {{ example3 }}
    </p>
    <p class="text-green-400">
      Example4: {{ example4 }}
    </p>
  </div>
</template>
