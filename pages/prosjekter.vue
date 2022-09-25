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
                :musicVideo="musicVideo"
                :key="musicVideo.id"
            />
        </div>
    </main>
</template>

<script setup>
import projects from '/data/projects.json'
useHead({
    title: 'Orkidé - Prosjekter',
    meta:[{name:'description', content:'Se de nye video Orkidé prosjektene på Orkidé Kino. Alt er produsert, filmet og redigert av Orkidé. Se Undergrunn hits som ITALIA, DR.PLAZA og TRAPMOBILE.'}]
});
</script>
