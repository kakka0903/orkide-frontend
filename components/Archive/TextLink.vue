<template>
  <NuxtLink
    :to="url"
    class="flex items-center gap-2 text-lg font-bold transition-colors text-primary-dark hover:text-secondary-dark active:text-secondary"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
 url: string
}
defineProps<Props>()
</script>
