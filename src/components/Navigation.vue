
<template>
    <nav class="flex items-center justify-between gap-6 py-4 text-lg text-primary-dark">
        <button
            v-for="(_, page) in pages"
            :key="page"
            @click="$emit('navigate', page)"
            class="first:mr-auto first:text-secondary"
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
