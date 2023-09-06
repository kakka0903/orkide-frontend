<template>
    <AlbumSlidesModal :slides="slides"></AlbumSlidesModal>
</template>

<script setup>
import albumProjects from '/data/albumcover-projects.json'
const route = useRoute();
const slug = route.params.slug
const project = albumProjects.data.find((project) => {
    return project.attributes.slug == slug
})
const slides = project.attributes.slides;
</script>
