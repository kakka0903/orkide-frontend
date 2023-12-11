<template>
  <CoversBaseSlide>
    <div class="flex flex-col w-full gap-4 aspect-square">
      <Transition
        mode="out-in"
        enter-active-class="transition duration-300 ease-out transform-gpu"
        leave-active-class="transition duration-75 ease-in transform-gpu"
        enter-from-class="scale-95 opacity-0"
        leave-to-class="scale-95 opacity-0"
      >
        <img v-if="!showDescription" class="bg-gray-500 aspect-square" :src="imageUrl" :alt="imageAlt">
        <div v-else class="px-10 py-5 text-left bg-background aspect-square dashed-border text-primary ">
          <MarkdownField :markdown="description" />
        </div>
      </Transition>
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
