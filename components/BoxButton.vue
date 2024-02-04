<script setup>
const props = defineProps({
  width: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    default: 'secondary',
    validator (value) {
      return ['primary', 'secondary'].includes(value)
    }
  }
})

const classes = computed(() => {
  return {
    'text-background': props.type === 'primary',
    'bg-primary': props.type === 'primary',
    'active:bg-secondary': props.type === 'primary',
    'disabled:bg-primary-dark': props.type === 'primary',

    'text-primary': props.type === 'secondary',
    'bg-background': props.type === 'secondary',
    'active:text-secondary': props.type === 'secondary',
    'disabled:text-primary-dark': props.type === 'secondary'
  }
})

</script>

<template>
  <button
    :style="{ width: `${width+0.01}ch`}"
    :class="classes"
    class="box-content p-4 font-bold text-left uppercase break-all border border-primary active:border-secondary hover:lowercase focus:outline-none focus:border-secondary disabled:border-primary-dark disabled:hover:uppercase"
  >
    <slot />
  </button>
</template>
