

<script setup>
import { computed } from 'vue'

const props = defineProps({
    width: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        default: 'secondary',
        validator(value) {
            return ['primary', 'secondary'].includes(value);
        }
    }
})

const classes = computed(() => {
    return {
        'text-white': props.type == 'primary',
        'bg-primary-600' : props.type == 'primary',
        'active:bg-secondary-600' : props.type == 'primary',
        'focus:border-secondary-600' : props.type == 'primary',
        
        'text-primary-600' : props.type == 'secondary',
        'border-primary-600' : props.type == 'secondary',
        'active:text-secondary-600' : props.type == 'secondary',
        'active:border-secondary-600' : props.type == 'secondary',
        'focus:border-secondary-600' : props.type == 'secondary',
    }
})

</script>

<template>
    <button
        :style="{ width: `${width}ch`}"
        :class="classes"
        class="box-content p-4 text-xl font-bold text-left uppercase break-all border hover:lowercase focus:outline-none"
    >
        <slot></slot>
    </button>
</template>