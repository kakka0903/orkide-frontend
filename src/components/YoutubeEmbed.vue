<template>
    <div class="">
        <iframe
            class="w-full bg-black text-primary"
            :height="playerHeight"
            :src="embedLink"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core"

const props = defineProps({
    playerHeight: {
        type: Number,
        default: 225,
    },
    youtubeId: String,
})

const embedLink = computed(() => {
    return 'https://www.youtube.com/embed/'+props.youtubeId;
})
</script>
