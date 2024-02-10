<template>
  <div class="flex-grow">
    <BoxButton @click="showSlideshow = !showSlideshow">
      open slideshow
    </BoxButton>
    <TicketsSlideshow v-if="showSlideshow" :cover-project-id="1" />
  </div>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
const showSlideshow = ref(false)
</script>
