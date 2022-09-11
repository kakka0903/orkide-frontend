<template>
    <div >
        <VideoModal 
            v-if="clip && musicVideo"
            @close="close"
            :youtubeId="clip.attributes.youtubeId" 
            :title="musicVideo.attributes.name+' BTS#'+clips.indexOf(clip)"
            :description="clip.attributes.description"
            isOpen
        />
    </div>
</template>

<script setup>
const props = defineProps({
    clips: Array,
    musicVideo: Object,
})

const route = useRoute();
const clip = computed(() => {
    return props.clips && props.clips.length > 0? props.clips[route.params.number] : undefined;
})

function close() {
    navigateTo('/bts/'+route.params.slug);
}
</script>