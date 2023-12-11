<template>
  <div class="flex flex-col-reverse gap-10 md:flex-row">
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
      class="hidden md:flex"
      :section-idx="sectionIdx"
      :num-sections="sections.length"
      :switch-message="switchMessage"
      :current-section-title="currentSection.title"
      @switch-section="nextSection"
    />

    <SectionSwitcherInfoMobile
      class="md:hidden"
      :section-idx="sectionIdx"
      :num-sections="sections.length"
      :switch-message="switchMessage"
      :current-section-title="currentSection.title"
      @switch-section="nextSection"
    />
  </div>
</template>

<script setup lang="ts">
// TODO: only ever show button message ONCE

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

const nextSection = () => {
  sectionIdx.value = (sectionIdx.value + 1) % props.sections.length
  updateSectionUrl()
}

const updateSectionUrl = () => {
  const router = useRouter()
  const route = useRoute()
  if (route.name !== undefined && route.name !== null) {
    router.push({ name: route.name, query: { section: currentSection.value.title.toLowerCase() } })
  }
}

const updateSectionIdx = () => {
  const route = useRoute()
  const sectionName = route.query.section
  const section = props.sections.find(s => s.title.toLowerCase() === sectionName)
  const idx = (section !== undefined) ? props.sections.indexOf(section) : section

  if (idx !== null && idx !== undefined) {
    sectionIdx.value = idx
  }
}

onMounted(() => {
  updateSectionIdx()
  updateSectionUrl()
})
</script>
