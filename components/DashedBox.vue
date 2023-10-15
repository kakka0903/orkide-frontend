<template>
  <div class="p-7 dashed-border">
    <p class="text-2xl font-bold text-primary">{{ title }}</p>
    <p v-if="subtitle" class="font-bold uppercase text-secondary">{{ subtitle }}</p>
    <p class="mt-3 text-primary">{{ text }}</p>
    <slot ></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  text: string
}
defineProps<Props>()
</script>
