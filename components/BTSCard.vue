<template>
    <div
        class="relative w-full border-2 border-primary hover:border-secondary"
        style="padding-top:100%;"
        :style="backgroundStyle"
    >
        <p class="absolute bottom-2 right-3 text-secondary">#0{{number}}</p>
    </div>
</template>

<script setup>

const props = defineProps({
    clip: Object,
    number: Number,
})

const config = useRuntimeConfig();
const thumbnailUrl = computed(() => {
    const thumbnail = props.clip.attributes.thumbnail.data
    return thumbnail ? thumbnail.attributes.url : undefined
})

const backgroundStyle = computed(() => {
    if(thumbnailUrl.value) {
        return {
            "background-image" : "url( " + thumbnailUrl.value + " )",
            'background-size': 'cover',
            'background-color':'black'
        }
    }
    return '';
})
</script>

