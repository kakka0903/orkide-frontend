<template>
  <TicketsIntroSlide v-if="slide.__component === 'ticket-slideshow.intro-slide'" :intro-slide="slide" />
  <TicketsVideoSlide v-else-if="slide.__component === 'ticket-slideshow.video-slide'" v-bind="slide" />
  <TicketsImageSlide
    v-else-if="slide.__component === 'ticket-slideshow.image-slide'"
    :image-url="slide.image.data.attributes.hash+slide.image.data.attributes.ext"
    :image-alt="slide.image.data.attributes.alternativeText"
  />
  <TicketsBaseSlide v-else>
    <p class="text-white">
      Could not find component for "{{ slide.__component }}"
    </p>
  </TicketsBaseSlide>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import type { SlideComponentDefinition } from '~/types/TicketSlideshow'
const { slide } = defineProps<{
  slide: SlideComponentDefinition
}>()
</script>
