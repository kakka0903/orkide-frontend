<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
  >
    <CoversSlideshowModal v-show="appearShow" :cover-project-id="coverProjectId" @click="navigateTo('/prosjekter')" />
  </transition>
</template>

<script setup>
// TODO: use slug over id
const appearShow = useAppearShow()
const route = useRoute()
const coverProjectId = parseInt(route.params.id)
</script>
