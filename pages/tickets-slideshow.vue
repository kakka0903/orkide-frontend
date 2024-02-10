<template>
  <div class="flex-grow">
    <BoxButton @click="showSlideshow = true">
      open slideshow
    </BoxButton>
    <TicketsShow v-if="showSlideshow" @close="showSlideshow = false" />
  </div>
</template>

<script setup lang="ts">
const showSlideshow = ref(false)
</script>
