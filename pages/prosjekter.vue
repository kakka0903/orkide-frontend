<template>
    <main class="flex flex-col flex-grow font-bold">
        <PageHeading
            title="ORKIDÉ KINO"
            description="Videoer laget av Orkidé"
        />
        <NuxtPage :projects="projects.data"/>
        <div class="flex flex-col content-start flex-grow gap-2 mb-2 gap-y-3 sm:flex-wrap sm:flex-row">
            <ProjectTicket
                v-for="musicVideo in projects.data"
                @watch="watchVideo(musicVideo)"
                :musicVideo="musicVideo"
                :key="musicVideo.id"
            />
        </div>
    </main>
</template>

<script setup>
import projects from '/data/projects.json'

function watchVideo(musicVideo) {
    navigateTo('/prosjekter/'+musicVideo.attributes.slug+'/')
}
useHead({title: 'Orkidé - Prosjekter'});
</script>
