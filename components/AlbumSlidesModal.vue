<template>
  <!-- <Transition
    enter-active-class="transition"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
  > -->
  <!-- <Transition
        enter-active-class="transition duration-300 ease-out delay-300 transform "
        enter-from-class="translate-y-10 opacity-0"
        enter-to-class="opacity-100"
      > -->
  <div class="fixed inset-0 flex items-center justify-center pt-5 bg-black/70" @click="exit">
    <Carousel ref="slideshow" class="relative w-full">
      <slide key="intro">
        <CoversIntroSlide title="italia" subtitle="UNDERGRUNN - 2022" text="UNDERGRUNN pakket selvfølgelig baggen og dro til Italia for å spille inn musikkvideo 🇮🇹 Det Orkidé-regisserte klippet er tekstet til engelsk, trolig til stor glede for UGs internasjonale fanbase. På fredag gjør UNDERGRUNN angivelig sin siste Oslo-konsert i år." />
      </slide>

      <slide v-for="slide in slides" :key="slide.id" class="flex justify-center h-full">
        <CoversSlideBase>
          <img v-show="!showDescription" class="w-full bg-gray-500 aspect-square" :src="getImageAttrs(slide).url">
          <div v-show="showDescription" class="px-10 py-5 font-bold text-left bg-white dashed-border text-primary">
            <p>{{ slide.description }}</p>
          </div>
        </CoversSlideBase>
      </slide>
    </Carousel>

    <transition
      enter-active-class="transition duration-300 ease-out delay-150"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
    >
      <button v-if="slideshow" class="absolute flex items-center gap-2 p-3 transition bottom-16 text-secondary-dark hover:text-secondary" @click.stop="toggleDescription">
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
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
    >
      <arrow-controls
        v-if="slideshow"
        class="absolute bottom-4"
        :current="currentSlide"
        :count="slideshow.data.slidesCount.value"
        @click.stop
        @next="slideshow.next"
        @prev="slideshow.prev"
      />
    </transition>

    <button class="absolute p-3 lowercase transition top-10 right-10 text-secondary-dark hover:text-secondary active:text-secondary" @click="exit">
      <XIcon class="w-6 h-6" />
    </button>
  </div>
</template>

<script setup>
// TODO: add title slide
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { XIcon } from '@heroicons/vue/solid/index.js'
import { QuestionMarkCircleIcon } from '@heroicons/vue/outline/index.js'

defineProps({
  slides: Array
})

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

const showDescription = ref(false)
const toggleDescription = () => {
  showDescription.value = !showDescription.value
  slideshow.value.updateSlideWidth()
}
</script>
