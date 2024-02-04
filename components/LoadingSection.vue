<template>
  <div>
    <transition
      enter-active-class="transition-opacity"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity"
      leave-to-class="opacity-0"
      leave-from-class="opacity-100"
    >
      <LoadingIndicator v-if="showIndicator" class="absolute" />
    </transition>
    <transition
      enter-active-class="transition-opacity"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
    >
      <div v-show="!isLoading && !showIndicator">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({ isLoading: Boolean })

const isWaitDone = ref(false)
setTimeout(() => {
  isWaitDone.value = true
}, 1000)

const showIndicator = computed(() => { return props.isLoading && isWaitDone.value })
</script>
