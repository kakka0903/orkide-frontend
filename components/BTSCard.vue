<template>
    <div
        class="relative w-full border-2 border-primary hover:border-secondary"
        style="padding-top:100%;"
        :style="backgroundStyle"
        @click="isModalOpen = true"
    >
        <p class="absolute bottom-2 right-3 text-secondary">#0{{clip.number}}</p>
        <BoxModal
            :isOpen="isModalOpen" @close="isModalOpen = false"
            class="text-primary-dark"
        >
            <YoutubeEmbed class="w-full max-w-sm" :youtubeId="clip.youtubeId"/>
            <p v-if="clip.description" class="p-4"> {{clip.description}}</p>
        </BoxModal>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
const isModalOpen = ref(false);

const props = defineProps({
    clip: Object,
})

const backgroundStyle = computed(() => {
    if(props.clip.image) {
        return {
            "background-image" : "url( " + props.clip.image + " )",
            'background-size': 'cover',
            'background-color':'black'
        }
    }
    return '';
})
</script>

