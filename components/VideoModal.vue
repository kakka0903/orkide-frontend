<template>
    <BoxModal :isOpen="true" class="text-primary">
        <YoutubeEmbed :youtubeId="musicVideo.attributes.youtubeId"/>
        <div class="p-4">
            <h3 class="text-3xl leading-none uppercase text-secondary">{{musicVideo.attributes.name}}</h3>
            <p class="text-sm uppercase">{{musicVideo.attributes.artist}} - {{musicVideo.attributes.year}}</p>
        </div>
    </BoxModal>
</template>

<script setup>
import { computed } from '@vue/runtime-core';
const props = defineProps({
    musicVideo:{
        type:Object,
        required:true,
    }
})
</script>
