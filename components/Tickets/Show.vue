<template>
  <div class="fixed inset-0 z-20 flex items-center justify-center bg-black/80" @click="exit">
    <Transition
      enter-active-class="transition duration-500 ease-out delay-300 transform-gpu"
      enter-from-class="translate-y-20 opacity-0"
      enter-to-class="opacity-100"
    >
      <Carousel
        v-if="appearShow && project !== null"
        ref="slideshow"
        class="relative w-full sm:mb-10"
        :mouse-drag="canDragSlides"
        :touch-drag="canDragSlides"
        @click="exit"
      >
        <slide key="intro" @click="exit">
          <TicketsIntroSlide :intro-slide="project.intro_slide" />
        </slide>

        <slide
          v-for="slide in project.slides"
          :key="slide.id"
          class="flex justify-center h-full"
        >
          <TicketsImageSlide
            :image-url="slide.image.data.attributes.hash+slide.image.data.attributes.ext"
            :image-alt="slide.image.data.attributes.alternativeText"
          />
        </slide>
      </Carousel>
    </Transition>

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
        @next="slideshow.next"
        @prev="slideshow.prev"
      />
    </transition>

    <button class="absolute p-3 lowercase transition top-5 right-5 sm:top-10 sm:right-10 text-secondary-dark hover:text-secondary active:text-secondary" @click="exit">
      <XMarkIcon class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'
import { XMarkIcon } from '@heroicons/vue/24/solid/index.js'
import { QuestionMarkCircleIcon } from '@heroicons/vue/24/outline/index.js'

const { appearShow } = useAppearShow()

const emit = defineEmits(['close'])

const doCacheCMSData = useRuntimeConfig().public.cacheCMSData
const { getCoverProjectById } = useCMSData(doCacheCMSData)
const { data: project } = await getCoverProjectById(props.coverProjectId)
if (project === null) {
  throw createError('Could not load project!')
}

const slideshow = ref(null)
const currentSlide = computed(() => {
  return slideshow.value.data.currentSlide.value + 1
})

const exit = () => {
  emit('close')
}

// disable drag while transitions are active to fix buggy UI
const canDragSlides = ref(false)
onMounted(() => {
  setTimeout(() => {
    canDragSlides.value = true
  }, 500)
})

useScrollLock()
</script>
