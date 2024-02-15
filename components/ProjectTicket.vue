<template>
  <div class="relative max-w-xs h-[123px] w-full font-bold" @click="isFlipped = !isFlipped">
    <div class="relative w-full h-full text-left">
      <TransitionGroup
        enter-active-class="transition-[opacity,transform] duration-300"
        enter-from-class="translate-x-16 opacity-0"
        enter-to-class="translate-x-0 opacity-100"
        leave-active-class="transition-[opacity,transform] duration-300"
        leave-from-class="translate-x-0 opacity-100"
        leave-to-class="-translate-x-16 opacity-0"
      >
        <ProjectTicketFront v-show="!isFlipped" key="front" :ticket="ticket" class="absolute top-0 left-0" />
        <ProjectTicketBack v-show="isFlipped" key="back" :ticket="ticket" class="absolute top-0 left-0" />
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
const isFlipped = ref(false)
defineProps<{ ticket: TicketProject }>()
</script>
