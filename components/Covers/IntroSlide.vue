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
        <div class="mt-2 text-sm md:text-base text-primary">
          <MarkdownField :markdown="text" />
        </div>
      </div>
    </DashedBox>
  </CoversBaseSlide>
</template>

<script setup lang="ts">

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
