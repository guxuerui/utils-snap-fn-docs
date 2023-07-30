<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { removeDuplicatesObj } from 'utils-snap-fn'

interface User {
  id: number
  name: string
}

const res: Ref<User[]> = ref([])

const arr: User[] = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'John' },
  { id: 4, name: 'Bob' },
  { id: 5, name: 'Jane' },
]

onMounted(() => {
  res.value = removeDuplicatesObj(arr, 'name')
})
</script>

<template>
  <div>
    <div>
      <pre class="relative -left-24 -top-12 h-44 text-orange-400">
        <div>
          const arr = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Jane' },
            { id: 3, name: 'John' },
            { id: 4, name: 'Bob' },
            { id: 5, name: 'Jane' },
          ]
        </div>
      </pre>
      result👇🏻
      <pre class="text-emerald-500" v-text="res" />
    </div>
  </div>
</template>
