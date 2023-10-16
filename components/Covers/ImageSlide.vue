<template>
  <CoversBaseSlide>
    <img v-show="!showDescription" class="w-full bg-gray-500 aspect-square" :src="imageUrl" :alt="imageAlt">
    <div v-show="showDescription" class="px-10 py-5 font-bold text-left bg-white dashed-border text-primary">
      <p>{{ description }}</p>
    </div>
  </CoversBaseSlide>
</template>

<script setup lang="ts">
interface Props {
  showDescription: boolean
  description: string
  imageUrl: string
  imageAlt: string
}
defineProps<Props>()
</script>
