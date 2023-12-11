<template>
  <div class="flex flex-col items-center gap-5">
    <SectionSwitcherHeading>
      <Transition
        enter-active-class="transition transform"
        enter-from-class="opacity-0"
        mode="out-in"
      >
        <p :key="currentSectionTitle">
          {{ currentSectionTitle }}
        </p>
      </Transition>
    </SectionSwitcherHeading>
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
