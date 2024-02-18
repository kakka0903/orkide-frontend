<template>
  <TicketsBaseSlide>
    <NuxtImg
      class="bg-gray-500"
      provider="strapi"
      :modifiers="{ breakpoint: 'large' }"
      :src="imageUrl"
      :alt="imageAlt"
    />
  </TicketsBaseSlide>
</template>

<script setup lang="ts">
interface Props {
  imageUrl: string
  imageAlt?: string
}
defineProps<Props>()
</script>
