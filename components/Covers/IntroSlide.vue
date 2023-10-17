<template>
  <CoversBaseSlide class="flex justify-center h-full">
    <DashedBox class="flex flex-col justify-center w-full p-8 md:p-10 aspect-square">
      <div>
        <p class="text-3xl font-bold underline md:mb-2 md:text-4xl text-primary">
          {{ title }}
        </p>
        <p v-if="subtitle" class="mt-1 text-sm font-bold md:text-base md:mb-4 text-secondary">
          {{ subtitle }}
        </p>
        <div class="mt-2 space-y-4 text-sm description-field md:text-base text-primary" v-html="md.render(text)" />
      </div>
    </DashedBox>
  </CoversBaseSlide>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'
const md = MarkdownIt()

// TODO: fix sizing when missing subtitle and desc
// TODO: set limit for text sizes
interface Props {
  title: string
  subtitle?: string
  text: string
}
defineProps<Props>()
// TODO: enable markdown formatting for text
</script>
