<template>
    <BoxModal :isOpen="true" class="text-primary">
        <YoutubeEmbed :youtubeId="youtubeId"/>
        <div class="p-4" v-if="title || description">
            <h3 class="text-3xl leading-none uppercase text-secondary">{{title}}</h3>
            <p class="text-sm uppercase">{{description}}</p>
        </div>
    </BoxModal>
</template>

<script setup>
import { computed } from '@vue/runtime-core';
const props = defineProps({
    youTubeId:String,
    title:String,
    description:String,
})
</script>
