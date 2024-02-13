<template>
  <div v-if="slideshow" class="fixed inset-0 z-20 flex items-center justify-center bg-black/80" @click="exit">
    <Transition
      enter-active-class="transition duration-500 ease-out delay-300 transform-gpu"
      enter-from-class="translate-y-20 opacity-0"
      enter-to-class="opacity-100"
    >
      <Carousel
        v-if="appearShow"
        ref="swiper"
        class="relative w-full sm:mb-10"
        @click="exit"
      >
        <slide key="intro" @click="exit">
          <TicketsIntroSlide :intro-slide="slideshow.intro_slide" />
        </slide>

        <slide
          v-for="slide in slideshow.image_slides"
          :key="slide.id"
          class="flex justify-center h-full"
        >
          <TicketsImageSlide
            :image-url="slide.image.data.attributes.hash+slide.image.data.attributes.ext"
            :image-alt="slide.image.data.attributes.alternativeText"
          />
        </slide>

        <slide
          v-for="slide in slideshow.video_slides"
          :key="slide.id"
          class="flex justify-center h-full"
        >
          <TicketsVideoSlide :youtube-id="slide.youtube_id" />
        </slide>
      </Carousel>
    </Transition>

    <transition
      enter-active-class="transition duration-300 ease-out delay-1000"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
    >
      <arrow-controls
        v-if="appearShow && swiper"
        class="absolute bottom-4"
        :current="currentSlide"
        :count="swiper.data.slidesCount.value"
        @next="swiper.next"
        @prev="swiper.prev"
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
import type { TicketsSlideshow } from '~/types/TicketSlideshow'

const { appearShow } = useAppearShow()

defineProps<{slideshow: TicketsSlideshow }>()
const emit = defineEmits(['close'])

const swiper = ref(null)
const currentSlide = computed(() => {
  return swiper.value.data.currentSlide.value + 1
})

const exit = () => {
  emit('close')
}
</script>
