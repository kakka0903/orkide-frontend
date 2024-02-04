<template>
  <div class="flex flex-col items-center gap-5">
    <div class="flex justify-center py-10 border-2 w-44 border-primary" style="border-radius: 50%;">
      <h2 class="font-bold text-9xl text-primary" style="writing-mode: vertical-lr;">
        <Transition
          enter-active-class="transition transform"
          enter-from-class="opacity-0"
          mode="out-in"
        >
          <p :key="currentSectionTitle">
            {{ currentSectionTitle }}
          </p>
        </Transition>
      </h2>
    </div>

    <SectionSwitcherButton @click="$emit('switchSection')">
      {{ switchMessage }}
    </SectionSwitcherButton>

    <p class="text-primary">
      {{ sectionIdx + 1 }} / {{ numSections }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  sectionIdx: number
  numSections: number
  switchMessage: string
  currentSectionTitle: string
}
defineProps<Props>()
defineEmits(['switchSection'])
</script>
