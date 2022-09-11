<template>
    <div>
        <VideoModal
            v-if="musicVideo"
            :musicVideo="musicVideo"
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
    return props.projects.find((el) => { return el.id == route.params.id });
})

computed(() => {
    if(musicVideo.value) {
        useHead({
            title:'Orkidé - '+musicVideo.value.name
        })
    }
})
</script>
