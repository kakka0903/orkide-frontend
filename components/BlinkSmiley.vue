<template>
  <span>{{ text }}</span>
</template>

<script setup>
const text = ref(':)')
setTimeout(() => {
  text.value = ';)'
  setTimeout(() => {
    text.value = ':)'
  }, 300)
}, 1000)
</script>
