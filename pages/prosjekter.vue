<template>
    <main class="flex flex-col flex-grow font-bold">
        <PageHeading
            title="ORKIDÉ KINO"
            description="Videoer laget av Orkidé"
        />
        <div class="flex flex-col content-start flex-grow gap-2 mb-2 sm:gap-y-3 sm:justify-center sm:items-start sm:flex-wrap sm:flex-row">
            <ProjectTicket
                v-for="musicVideo in projects"
                :musicVideo="musicVideo"
                :key="musicVideo.id"
            />
        </div>
    </main>
</template>

<script setup>
import projects from '../data/projects'

useHead({
    title: 'Orkidé - Prosjekter',
});
</script>
