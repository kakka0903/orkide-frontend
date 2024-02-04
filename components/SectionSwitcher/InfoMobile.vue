<template>
  <div class="flex items-center gap-5 p-8 border-2 border-dashed border-primary">
    <div>
      <p class="text-xs text-secondary">
        seksjon
      </p>
      <Transition
        enter-active-class="transition transform"
        enter-from-class="opacity-0"
        mode="out-in"
      >
        <h2 :key="currentSectionTitle" class="text-3xl font-bold text-primary">
          {{ currentSectionTitle }}
        </h2>
      </Transition>
    </div>

    <p class="ml-auto text-primary">
      {{ sectionIdx + 1 }} / {{ numSections }}
    </p>
    <SectionSwitcherButton @click="$emit('switchSection')">
      {{ switchMessage }}
    </SectionSwitcherButton>
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
