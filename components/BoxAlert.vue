<template>
  <transition
    appear
    enter-active-class="transition duration-300 transform transform-gpu"
    enter-from-class="-translate-y-4 opacity-0"
    leave-active-class="transition duration-150 transform-gpu"
    leave-to-class="translate-y-4 opacity-0"
  >
    <div
      v-if="!isDeleted"
      :class="{ 'text-red-600' : level=='warning', 'text-primary' : level=='success'}"
      class="fixed top-0 left-0 flex justify-center w-full cursor-pointer pointer-events-none"
    >
      <article
        class="flex w-full max-w-sm py-3 mt-5 -mx-2 bg-white border-4 pointer-events-auto"
        :class="{ 'border-red-600' : level == 'warning', 'border-primary': level == 'success'}"
        @click.stop="isDeleted = true"
      >
        <div class="ml-3 mr-2 mt-0.5">
          <ExclamationIcon v-if="level=='warning'" class="w-6 h-6" />
          <CheckCircleIcon v-if="level=='success'" class="w-6 h-6" />
        </div>
        <div class="mx-2">
          <p class="text-lg text-left uppercase">
            {{ title }}
          </p>
          <p class="text-sm">
            {{ message }}
          </p>
        </div>
      </article>
    </div>
  </transition>
</template>

<script setup>
import { CheckCircleIcon, ExclamationIcon } from '@heroicons/vue/24/outline/index.js'

defineProps({
  level: {
    type: String,
    validator (value) {
      return ['warning', 'success'].includes(value)
    },
    default: 'warning'
  },
  message: String,
  title: String
})

const isDeleted = ref(false)

onMounted(() => {
  setTimeout(() => {
    isDeleted.value = true
  }, 5000)
})
</script>
