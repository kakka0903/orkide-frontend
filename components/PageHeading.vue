<template>
  <div class="relative h-20 font-bold text-primary">
    <div class="-translate-x-5">
      <transition
        appear
        enter-active-class="transition duration-300 ease-out transform transform-gpu"
        enter-from-class="translate-x-10 opacity-0"
        enter-to-class="opacity-100 "
      >
        <svg v-show="appearShow" class="stroke-current text-secondary-dark w-72" viewBox="0 0 735.255 133.583"><path data-name="Path 62" d="M735.193 66.52 81.458 79.33l-14.481 53.468L56.395 79.33.695 66.52l55.7-13.366L66.977.798l14.481 52.356Z" fill="none" stroke-width="6" /></svg>
      </transition>
    </div>
    <h1 class="absolute top-[-5px] left-[18px] text-[43px] whitespace-nowrap">
      {{ heading.title }}
    </h1>
    <transition
      appear
      enter-active-class="transition duration-300 ease-out delay-150 transform-gpu"
      enter-from-class="translate-x-10 opacity-0"
      enter-to-class="translate-x-0 opacity-100"
    >
      <h2 v-if="heading.subtitle && appearShow">
        {{ heading.subtitle }}
      </h2>
    </transition>
  </div>
</template>

<script setup lang="ts">
import useAppearShow from '../composables/useAppearShow'
import type { PageHeading } from '~/types/Pages'

const { appearShow } = useAppearShow()

interface Props {
  heading: PageHeading
}
defineProps<Props>()
</script>
