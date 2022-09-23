<template>
    <div>
        <VideoModal
            v-if="musicVideo"
            :title="musicVideo.attributes.name"
            :description="description"
            :youtubeId="musicVideo.attributes.youtubeId"
            @close="navigateTo('/prosjekter/')"
        />
    </div>
</template>

<script setup>
import projects from '/data/projects.json'

const route = useRoute();
const musicVideo = computed(() => {
    return projects.data.find((project) => {
        return project.attributes.slug == route.params.slug
    });
})
const description = computed(() => {
    var mvid = musicVideo.value.attributes;
    return mvid.artist + ' ' + mvid.year + '. ' + mvid.description
})
useHead({ title:'Orkidé - '+musicVideo.value.attributes.name })
</script>
