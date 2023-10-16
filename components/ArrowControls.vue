<template>
  <div class="flex items-center gap-10 text-secondary-dark">
    <button class="p-3 transition disabled:opacity-0 hover:text-secondary touch-manipulation" :disabled="current == 1" @click="prev">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
      </svg>
    </button>

    <div>
      {{ current }} / {{ count }}
    </div>

    <button class="p-3 transition disabled:opacity-0 hover:text-secondary touch-manipulation" :disabled="current == count" @click="next">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
      </svg>
    </button>
  </div>
</template>

<script setup>
defineProps({
  current: Number,
  count: Number
})

const emit = defineEmits([
  'next', 'prev'
])
const next = () => {
  emit('next')
}
const prev = () => {
  emit('prev')
}
</script>
