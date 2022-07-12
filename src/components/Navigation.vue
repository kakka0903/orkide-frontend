
<template>
    <nav class="flex items-center justify-between gap-6 py-8 text-base font-bold text-primary-dark">
        <button
            v-for="(_, page) in pages"
            :key="page"
            @click="$emit('navigate', page)"
            class="lowercase first:mr-auto first:text-secondary hover:uppercase"
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
