<template>
    <main class="flex flex-col font-bold">
        <PageHeading
            title="ORKIDÉ KINO"
            description="Musikkvideoer laget av Orkidé"
        />
        <p class="mb-10 text-primary">
            EKSTRA! SE eksklusive
            <span class="italic text-secondary">behind the scenes</span>
            klipp fra filmingen av Orkidé musikkvideoer. Trykk
            <span class="italic">BTS</span>
            nedenfor <blink-smiley/>
        </p>
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
        id:2, youtubeId:"Ri3k4XB2e7c", name: 'TRAPMOBILE', description: 'er den tredje musikkvideoen produsert av Orkidé. Trapmobilen man ser videoen, er magnus sin stasjonsvogn.', artist: 'Undergrunn', length: 165, year: 2020,
        clips: [
            {number:0, youtubeId:'Ri3k4XB2e7c', description: 'marstein løper fra politiet'},
            {number:1, youtubeId:'Ri3k4XB2e7c', description: 'intervju med petter'},
            {number:2, youtubeId:'Ri3k4XB2e7c'},
            {number:3, youtubeId:'Ri3k4XB2e7c'},
            {number:4, youtubeId:'Ri3k4XB2e7c'},
            {number:5, youtubeId:'Ri3k4XB2e7c', image:'police-bts.png'},
            {number:6, youtubeId:'Ri3k4XB2e7c', image:'album.png'},
        ]
    },
    {
        id:1, youtubeId:"2NR29EicJP4", name: 'DR.PLAZA', description: 'Denne musikkvideoen ble fasktisk bannlyst i saudi arabia siden den viser bruk av narkotiske stoffer.', artist: 'Undergrunn', length: 238, year: 2019,
        clips: [
            {number:0, youtubeId:'Ri3k4XB2e7c', image:'police-bts.png', description: 'marstein løper fra politiet'},
        ]
    },
    {
        id:0, youtubeId:"KaCIVZKTjv4", name: 'Hjemmebrent', description: 'prosjektet fikk kodenavnet "generisk sang 3" siden hemmelig informasjon om Orkidé ble lekket til massene.', artist: 'MONSTER', length: 199, year: 2019,
        clips: []
    },
])

</script>
