<template>
    <BoxModal :isOpen="true" class="text-primary">
        <YoutubeEmbed :youtubeId="youtubeId"/>
        <div class="max-w-md p-4 space-y-2 border-t-4 border-primary" v-if="title || description">
            <h3 class="text-3xl leading-none uppercase text-primary">{{title}}</h3>
            <p class="font-normal">{{description}}</p>
        </div>
    </BoxModal>
</template>

<script setup>
import { computed } from '@vue/runtime-core';
const props = defineProps({
    youtubeId:String,
    title:String,
    description:String,
})
</script>
