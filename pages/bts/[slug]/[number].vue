<template>
    <VideoModal 
        @close="close" 
        :youtubeId="clip.attributes.youtubeId" 
        :description="clip.attributes.description"
        isOpen
    />
</template>

<script setup>
const props = defineProps({
    clips: Array,
})

const route = useRoute();
const clip = computed(() => {
    return props.clips.length > 0 ? props.clips[route.params.number] : undefined;
})

function close() {
    navigateTo('/bts/'+route.params.slug);
}
</script>