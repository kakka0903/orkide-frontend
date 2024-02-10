<template>
  <div class="flex-grow">
    <BoxButton @click="showSlideshow = !showSlideshow">
      open slideshow
    </BoxButton>
    <TicketsShow v-if="showSlideshow" :cover-project-id="1" />
  </div>
</template>

<script setup lang="ts">
const showSlideshow = ref(false)
</script>
