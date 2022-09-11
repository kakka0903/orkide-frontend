<template>
    <div>
        <VideoModal
            v-if="musicVideo"
            :title="musicVideo.attributes.name"
            :description="description"
            :youtubeId="musicVideo.attributes.youtubeId"
            @close="navigateTo('/prosjekter')"
        />
    </div>
</template>

<script setup>
const props = defineProps({
    projects: Object,
})

const route = useRoute();

const musicVideo = computed(() => {
    return props.projects.find((el) => { return el.attributes.slug == route.params.slug });
})

const description = computed(() => {
    var mvid = musicVideo.value.attributes;
    return mvid.artist + ' ' + mvid.year + '. ' + mvid.description
})

computed(() => {
    if(musicVideo.value) {
        useHead({
            title:'Orkidé - '+musicVideo.value.name
        })
    }
})
</script>
