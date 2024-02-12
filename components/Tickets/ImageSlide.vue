<template>
  <TicketsBaseSlide>
    <div class="flex flex-col items-center justify-center w-full gap-4 cursor-grab aspect-square">
      <NuxtImg
        class="bg-gray-500"
        provider="strapi"
        :modifiers="{ breakpoint: 'large' }"
        :src="imageUrl"
        :alt="imageAlt"
      />
    </div>
  </TicketsBaseSlide>
</template>

<script setup lang="ts">
interface Props {
  imageUrl: string
  imageAlt?: string
}
defineProps<Props>()
</script>
