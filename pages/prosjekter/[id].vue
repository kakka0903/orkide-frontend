<template>
    <div>
        <VideoModal
            :musicVideo="musicVideo"
            @close="navigateTo('/prosjekter')"
        />
    </div>
</template>

<script setup>
import projects from '../../data/projects';
const route = useRoute();
const musicVideo = computed(() => {
    return projects.find((el) => { return el.id == route.params.id });
})
useHead({
    title:'Orkidé - '+musicVideo.value.name
})
</script>
