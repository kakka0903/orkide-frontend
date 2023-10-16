<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
  >
    <CoversSlideshowModal v-show="appearShow" :slides="slides" />
  </transition>
</template>

<script setup>
import albumProjects from '~/data/albumcover-projects.json'
const route = useRoute()
const slug = route.params.slug
const project = albumProjects.data.find((project) => {
  return project.attributes.slug == slug
})
const slides = project.attributes.slides

const { appearShow } = useAppearShow()

</script>
