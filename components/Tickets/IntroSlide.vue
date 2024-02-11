<template>
  <CoversBaseSlide class="flex justify-center h-full">
    <DashedBox class="flex flex-col justify-center w-full p-8 overflow-y-scroll md:p-10 aspect-square">
      <div>
        <p class="text-3xl font-bold underline md:mb-2 md:text-4xl text-primary">
          {{ introSlide.title }}
        </p>
        <p class="mt-1 text-sm font-bold md:text-base md:mb-4 text-secondary">
          {{ introSlide.subtitle }}
        </p>
        <div v-if="introSlide.description" class="mt-2 text-sm md:text-base text-primary">
          <MarkdownField :markdown="introSlide.description" />
        </div>
      </div>
    </DashedBox>
  </CoversBaseSlide>
</template>

<script setup lang="ts">
import type { TicketsIntroSlide } from '~/types/TicketSlideshow'
defineProps<{ introSlide: TicketsIntroSlide }>()
// TODO: fix sizing when missing subtitle and desc
// TODO: set limit for text sizes
</script>
