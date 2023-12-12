<template>
  <transition
    enter-active-class="transition duration-150"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
  >
    <div v-if="isOpen && appearShow" class="fixed inset-0 top-0 left-0 z-50 flex items-center justify-center text-left bg-black bg-opacity-50 cursor-default" @click.stop="close">
      <transition
        appear
        enter-active-class="transition duration-500 delay-150 transform"
        enter-from-class="-translate-y-6 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
      >
        <article class="relative bg-background border-4 border-primary" @click.stop>
          <button class="absolute lowercase top-2 right-2 text-secondary hover:text-secondary-dark active:text-primary-dark" @click="close">
            <XMarkIcon class="w-6 h-6" />
          </button>
          <slot />
        </article>
      </transition>
    </div>
  </transition>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/solid/index.js'
import useAppearShow from '../composables/useAppearShow'
const { appearShow } = useAppearShow()
const emit = defineEmits(['close'])
defineProps({
  isOpen: Boolean
})
function close () {
  emit('close')
}
</script>
