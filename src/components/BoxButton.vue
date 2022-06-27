

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
        'bg-lime-600' : props.type == 'primary',
        'active:bg-orange-600' : props.type == 'primary',
        'focus:border-orange-600' : props.type == 'primary',
        
        'text-green-600' : props.type == 'secondary',
        'border-green-600' : props.type == 'secondary',
        'active:text-orange-600' : props.type == 'secondary',
        'active:border-orange-600' : props.type == 'secondary',
        'focus:border-orange-600' : props.type == 'secondary',
    }
})

</script>

<template>
    <button
        :style="{ width: `${width}ch`}"
        :class="classes"
        class="box-content p-4 text-2xl font-bold text-left uppercase break-all border hover:lowercase focus:outline-none"
    >
        <slot></slot>
    </button>
</template>