<script setup lang="ts">
import { ref } from 'vue'
import { generateUUID } from 'utils-snap-fn'

const randomUUID = ref(generateUUID())
</script>

<template>
  <div>
    generated random UUID ->
    <span class="text-emerald-500 text-xl ml-2">{{ randomUUID }}</span>
  </div>
</template>
