<template>
  <CoversSlideBase class="flex justify-center h-full">
    <DashedBox class="flex flex-col justify-center w-full p-8 md:p-10 aspect-square">
      <div>
        <p class="text-3xl font-bold underline md:mb-2 md:text-4xl text-primary">
          {{ title }}
        </p>
        <p v-if="subtitle" class="mt-1 text-sm font-bold md:text-base md:mb-4 text-secondary">
          {{ subtitle }}
        </p>
        <p class="mt-2 text-sm md:text-base text-primary">
          {{ text }}
        </p>
      </div>
    </DashedBox>
  </CoversSlideBase>
</template>

<script setup lang="ts">
interface Props {
  title: string
  subtitle?: string
  text: string
}
defineProps<Props>()
</script>
