

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
        'bg-primary' : props.type == 'primary',
        'active:bg-secondary' : props.type == 'primary',
        'focus:border-secondary' : props.type == 'primary',

        'text-primary' : props.type == 'secondary',
        'border-primary' : props.type == 'secondary',
        'active:text-secondary' : props.type == 'secondary',
        'active:border-secondary' : props.type == 'secondary',
        'focus:border-secondary' : props.type == 'secondary',
    }
})

</script>

<template>
    <button
        :style="{ width: `${width}ch`}"
        :class="classes"
        class="box-content p-4 font-bold text-left uppercase break-all border hover:lowercase focus:outline-none"
    >
        <slot></slot>
    </button>
</template>
