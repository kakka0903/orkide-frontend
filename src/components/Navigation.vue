
<template>
    <nav class="flex items-center justify-between gap-6 py-6 text-base font-bold xs:py-8 text-primary-dark">
        <button
            v-for="page in pages"
            :key="page"
            @click="$emit('navigate', page)"
            class="lowercase first:mr-auto first:text-secondary active:text-secondary-dark hover:uppercase"
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
