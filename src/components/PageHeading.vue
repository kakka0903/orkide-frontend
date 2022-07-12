<template>
    <div class="relative mt-2 mb-10 font-bold text-primary">
        <svg class="-translate-x-5 stroke-current text-secondary w-72" viewBox="0 0 735.255 133.583"><path data-name="Path 62" d="M735.193 66.52 81.458 79.33l-14.481 53.468L56.395 79.33.695 66.52l55.7-13.366L66.977.798l14.481 52.356Z" fill="none" stroke-width="6"/></svg>
        <h1 class="absolute top-[-5px] left-[18px] text-[43px]">{{title}}</h1>
        <h2 v-if="description">{{description}}</h2>
    </div>
</template>

<script setup>
defineProps({
    title:Text,
    description:Text,
})
</script>
