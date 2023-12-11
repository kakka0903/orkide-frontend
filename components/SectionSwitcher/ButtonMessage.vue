<template>
  <div class="right-[100%] top-0 absolute overflow-x-hidden pb-20">
    <transition
      enter-active-class="transition duration-500 ease-out transform"
      leave-active-class="transition duration-500 ease-in transform"
      enter-from-class="translate-x-[100%]"
      leave-to-class="translate-x-[100%]"
    >
      <div v-if="showMessage" class="flex items-center bg-white border border-r-0 shadow-xl border-1 border-secondary h-14">
        <p class="px-4 text-xl font-bold whitespace-nowrap text-secondary-dark">
          <slot />
        </p>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
// TODO: only ever show button message ONCE
const showMessage = ref(false)

function flashMessage () {
  showMessage.value = true
  setTimeout(() => {
    showMessage.value = false
  }, 5000)
}

onMounted(() => {
  setTimeout(() => {
    flashMessage()
  }, 1000)
})

</script>
