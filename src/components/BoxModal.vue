<template>
    <div v-if="isOpen" @click.stop="close" class="fixed inset-0 top-0 left-0 z-50 flex items-center justify-center text-left bg-black bg-opacity-50 cursor-default">
        <article @click.stop class="relative bg-white border-4 border-secondary">
            <button @click="close" class="absolute lowercase top-2 right-2 text-primary hover:text-primary-dark active:text-secondary-dark">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <slot></slot>
        </article>
    </div>
</template>

<script setup>
const emit = defineEmits(['close'])
defineProps({
    isOpen:Boolean
})
function close() {
    emit('close');
}
</script>

