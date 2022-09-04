<template>
    <transition appear
        enter-active-class="transition duration-150"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
    >
        <div v-if="isOpen" @click.stop="close" class="fixed inset-0 top-0 left-0 z-50 flex items-center justify-center text-left bg-black bg-opacity-50 cursor-default">
            <transition appear
                enter-active-class="transition duration-500 delay-150 transform"
                enter-from-class="-translate-y-6 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
            >
                <article @click.stop class="relative bg-white border-4 border-secondary">
                    <button @click="close" class="absolute lowercase top-2 right-2 text-primary hover:text-primary-dark active:text-secondary-dark">
                        <XIcon class="w-6 h-6"/>
                    </button>
                    <slot></slot>
                </article>
            </transition>
        </div>
    </transition>
</template>

<script setup>
import { XIcon } from '@heroicons/vue/solid/index.js';
const emit = defineEmits(['close'])
defineProps({
    isOpen:Boolean
})
function close() {
    emit('close');
}
</script>

