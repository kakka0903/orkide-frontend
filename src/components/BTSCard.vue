<template>
    <article
        @click="isModalOpen = true"
        :style="backgroundStyle"
        class="flex items-end justify-end h-32 p-2 bg-white border-4 cursor-pointer hover:border-secondary hover:text-secondary text-primary sm:col-span-1 border-primary"
    >
        <p class="">#{{id}}</p>
        <BoxModal :isOpen="isModalOpen" @close="isModalOpen = false">
            <div class="w-full max-w-sm">
                <YoutubeEmbed :youtubeId="youtubeId" />
            </div>
        </BoxModal>
    </article>
</template>

<script setup>

import { computed, ref } from 'vue'
import BoxModal from './BoxModal.vue';
import YoutubeEmbed from './YoutubeEmbed.vue';
const isModalOpen = ref(false);


const props = defineProps({
    id: Number,
    imageUrl: String,
    youtubeId: String,
})

const backgroundStyle = computed(() => {
    return {
        "background-image" : "url( " + props.imageUrl + " )",
        'background-size': 'cover',
    }
})
</script>

