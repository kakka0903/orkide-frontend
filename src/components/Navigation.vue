
<template>
    <nav class="flex items-center justify-between gap-6 my-8 text-xl text-lime-900">
        <button 
            v-for="(_, page) in pages" 
            @click="$emit('navigate', page)"
            class="first:mr-auto first:text-orange-600"
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