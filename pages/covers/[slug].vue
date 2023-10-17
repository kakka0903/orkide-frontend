<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
  >
    <CoversSlideshowModal v-show="appearShow && project" :project="project" />
  </transition>
</template>

<script setup>
// TODO: throw error if no project
const route = useRoute()
const { data: project } = await useSingleCoverProject(route.params.slug)
const { appearShow } = useAppearShow()
</script>
