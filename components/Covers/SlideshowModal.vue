<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black/80" @click="exit">
    <Transition
      enter-active-class="transition duration-500 ease-out delay-300 transform-gpu"
      enter-from-class="translate-y-20 opacity-0"
      enter-to-class="opacity-100"
    >
      <Carousel v-show="appearShow" ref="slideshow" class="relative w-full sm:mb-10" :mouse-drag="canDragSlides" :touch-drag="canDragSlides">
        <slide key="intro">
          <CoversIntroSlide
            :title="project.title"
            :subtitle="project.subtitle"
            :text="project.description"
          />
        </slide>

        <slide v-for="slide in project.slides" :key="slide.id" class="flex justify-center h-full">
          <CoversImageSlide
            :image-url="slide.image.data.attributes.url"
            :image-alt="slide.image.data.attributes.alternativeText"
            :description="slide.description"
            :show-description="showDescription"
          />
        </slide>
      </Carousel>
    </Transition>

    <transition
      enter-active-class="transition duration-300 ease-out delay-150"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
    >
      <button
        v-if="slideshow && 1 < currentSlide"
        class="absolute flex items-center gap-2 p-3 transition bottom-14 text-secondary-dark hover:text-secondary touch-manipulation"
        @click.stop="toggleDescription"
      >
        <p v-if="!showDescription">
          show description
        </p>
        <p v-else>
          show albumcover
        </p>
        <QuestionMarkCircleIcon class="w-6 h-6" />
      </button>
    </transition>

    <transition
      enter-active-class="transition duration-300 ease-out delay-1000"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
    >
      <arrow-controls
        v-if="slideshow && appearShow"
        class="absolute bottom-4"
        :current="currentSlide"
        :count="slideshow.data.slidesCount.value"
        @click.stop
        @next="slideshow.next"
        @prev="slideshow.prev"
      />
    </transition>

    <button class="absolute p-3 lowercase transition top-5 right-5 sm:top-10 sm:right-10 text-secondary-dark hover:text-secondary active:text-secondary" @click="exit">
      <XIcon class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup lang="ts">
// TODO: add title slide
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { XIcon } from '@heroicons/vue/solid/index.js'
import { QuestionMarkCircleIcon } from '@heroicons/vue/outline/index.js'
import { AlbumCoverProject } from '~/types/CoverProjects'

const { appearShow } = useAppearShow()

interface Props {
  project: AlbumCoverProject
}
defineProps<Props>()

const slideshow = ref(null)
const currentSlide = computed(() => {
  return slideshow.value.data.currentSlide.value + 1
})

const getImageAttrs = (slide) => {
  return slide.image.data.attributes
}

const exit = () => {
  navigateTo('/covers')
}

// disable drag while transitions are active to fix buggy UI
const canDragSlides = ref(false)
onMounted(() => {
  setTimeout(() => {
    canDragSlides.value = true
  }, 500)
})

const showDescription = ref(false)
const toggleDescription = () => {
  showDescription.value = !showDescription.value
  slideshow.value.updateSlideWidth()
}

useScrollLock()
</script>
