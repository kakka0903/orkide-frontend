<template>
    <BoxModal :isOpen="true" class="text-primary">
        <iframe class="w-full bg-black text-primary" height="225" :src="embedlink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="flex items-center p-4 bg-white border-t-4 border-secondary">
            <div class="">
                <h3 class="text-3xl leading-none uppercase text-secondary">{{musicVideo.name}}</h3>
                <p class="text-sm uppercase">{{musicVideo.artist}} - {{musicVideo.year}}</p>
            </div>
            <ReactionPoll class="ml-auto"/>
        </div>
    </BoxModal>
</template>

<script setup>
import { computed } from '@vue/runtime-core';
import BoxModal from './BoxModal.vue';
import ReactionPoll from './ReactionPoll.vue';
const props = defineProps({
    musicVideo:{
        type:Object,
        required:true,
    }
})
const embedlink = computed( () => {
    return 'https://www.youtube.com/embed/'+props.musicVideo.youtubeId;
})
</script>
