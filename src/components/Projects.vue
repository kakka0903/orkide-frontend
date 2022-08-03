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
    { id:1, youtubeId:"Ri3k4XB2e7c", name: 'Trapmobile', description: 'is the third music video produced by Orkidé. The trapmobile seen in the videos, is a Volvo station wagon.', artist: 'Undergrunn', length: 165, year: 2020},
    { id:2, youtubeId:"2NR29EicJP4", name: 'DR.PLAZA', description: 'This music video is actually banned in saudi arabia since it features the use of narcotics', artist: 'Undergrunn', length: 238, year: 2019},
    { id:3, youtubeId:"KaCIVZKTjv4", name: 'Hjemmebrent', description: 'This project was codenamed "generic song 3" since information orkidé projects kept leaking to the masses.', artist: 'MONSTER', length: 199, year: 2019},
    { id:3, youtubeId:"KaCIVZKTjv4", name: 'Hjemmebrent', description: 'This project was codenamed "generic song 3" since information orkidé projects kept leaking to the masses.', artist: 'MONSTER', length: 199, year: 2019},
    { id:3, youtubeId:"KaCIVZKTjv4", name: 'Hjemmebrent', description: 'This project was codenamed "generic song 3" since information orkidé projects kept leaking to the masses.', artist: 'MONSTER', length: 199, year: 2019},
    { id:3, youtubeId:"KaCIVZKTjv4", name: 'Hjemmebrent', description: 'This project was codenamed "generic song 3" since information orkidé projects kept leaking to the masses.', artist: 'MONSTER', length: 199, year: 2019},
    { id:3, youtubeId:"KaCIVZKTjv4", name: 'Hjemmebrent', description: 'This project was codenamed "generic song 3" since information orkidé projects kept leaking to the masses.', artist: 'MONSTER', length: 199, year: 2019},
])
</script>
