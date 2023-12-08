<template>
  <div class="right-[100%] top-0 absolute overflow-x-hidden pb-20">
    <transition
      enter-active-class="transition duration-500 ease-out transform"
      leave-active-class="transition duration-500 ease-in transform"
      enter-from-class="translate-x-[100%]"
      leave-to-class="translate-x-[100%]"
    >
      <div v-if="showMessage" class="border-[1.5px] shadow-xl flex items-center bg-white border-secondary border-r-0  border-dashed h-14">
        <p class="px-4 text-2xl font-bold whitespace-nowrap text-secondary-dark">
          <slot />
        </p>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
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
