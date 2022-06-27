
<template>
    <nav class="flex items-center justify-between gap-6 mt-4 mb-8 text-lg text-primary-900">
        <button 
            v-for="(_, page) in pages" 
            @click="$emit('navigate', page)"
            class="first:mr-auto first:text-secondary-600"
        >
            {{page}}
        </button>
    </nav>
</template>

<script setup>
defineProps({
    pages: {
        type: Array,
        required: true,
    }
})
</script>