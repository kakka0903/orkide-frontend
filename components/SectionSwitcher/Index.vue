<template>
  <div class="flex">
    <div class="flex-grow">
      <Transition
        enter-active-class="transition transform"
        enter-from-class="opacity-0"
        mode="out-in"
      >
        <component :is="currentSection.component" :key="currentSection.title" />
      </Transition>
    </div>

    <SectionSwitcherInfoDesktop
      :section-idx="sectionIdx"
      :num-sections="sections.length"
      :switch-message="switchMessage"
      :current-section-title="currentSection.title"
      @switch-section="nextSection"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  sections: {
    title: string,
    component: any
  }[],
  switchMessage: string
}
const props = defineProps<Props>()

const sectionIdx = ref(0)
const currentSection = computed(() => {
  return props.sections[sectionIdx.value]
})

const updateSectionUrl = () => {
  console.log('set url section to: ' + currentSection.value.title)
}

const nextSection = () => {
  sectionIdx.value = (sectionIdx.value + 1) % props.sections.length
  updateSectionUrl()
}

onMounted(updateSectionUrl)
</script>
