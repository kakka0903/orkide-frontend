<template>
  <CoversBaseSlide>
    <div class="flex flex-col justify-center w-full gap-4 cursor-pointer aspect-square">
      <NuxtImg
        class="bg-gray-500"
        provider="strapi"
        :modifiers="{ breakpoint: 'large' }"
        :src="imageUrl"
        :alt="imageAlt"
      />
    </div>
  </CoversBaseSlide>
</template>

<script setup lang="ts">
interface Props {
  imageUrl: string
  imageAlt?: string
}
defineProps<Props>()
</script>
