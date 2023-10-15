<template>
  <BoxModal :is-open="isOpen" class="text-primary">
    <YoutubeEmbed :youtube-id="youtubeId" />
    <div v-if="title || description" class="max-w-md p-4 space-y-2 border-t-4 border-primary">
      <h2 class="text-3xl leading-none uppercase text-primary">
        {{ title }}
      </h2>
      <p class="font-normal">
        {{ description }}
      </p>
    </div>
  </BoxModal>
</template>

<script setup>
const props = defineProps({
  youtubeId: String,
  title: String,
  description: String,
  isOpen: {
    type: Boolean,
    default: true
  }
})
</script>
