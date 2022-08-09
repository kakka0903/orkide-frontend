<template>
    <main class="flex flex-col font-bold">
        <PageHeading
            title="ORKIDÉ KINO"
            description="Videoer laget av Orkidé"
        />
        <div class="flex flex-col content-start flex-grow gap-2 mb-2 sm:gap-y-3 sm:justify-center sm:items-start sm:flex-wrap sm:flex-row">
            <ProjectTicket
                v-for="musicVideo in musicVideos"
                :musicVideo="musicVideo"
                :key="musicVideo.id"
            />
        </div>
    </main>
</template>

<script setup>
import { ref } from '@vue/reactivity';
import PageHeading from './PageHeading.vue';
import ProjectCard from './ProjectCard.vue';
import ProjectTicket from './ProjectTicket.vue';
import BlinkSmiley from './BlinkSmiley.vue'
const musicVideos = ref([
    {
        id:0, youtubeId:"", name: 'ITALIA', description: '', artist: 'Undergrunn', length: 0, year: 2022, isNew: true,
        clips: []
    },
    {
        id:1, youtubeId:"1meKrSyHErM", name: 'TOPPEN AV OSL', description: 'Fin vin, fin bil. Bli med til toppen. Det er sånn vi har det her.', artist: 'Undergrunn', length: 190, year: 2021,
        clips: []
    },
    {
        id:2, youtubeId:"55cqJAV-Lhs", name: 'KOM OG BETAL', description: 'Alexander McQueen sko jeg leser en fin bok, bak i en lynet McQueen coupe.', artist: 'Undergrunn', length: 176, year: 2020,
        clips: []
    },
    {
        id:3, youtubeId:"Ri3k4XB2e7c", name: 'TRAPMOBILE', description: 'er den tredje musikkvideoen produsert av Orkidé for UG. Bli med inn i en toyota hiace selvom mamma sier nei.', artist: 'Undergrunn', length: 165, year: 2020,
        clips: []
    },
    {
        id:4, youtubeId:"2NR29EicJP4", name: 'DR.PLAZA', description: 'Her started sammarbeidet som ble bølgen. Tsunami.', artist: 'Undergrunn', length: 238, year: 2019,
        clips: []
    },
])

</script>
