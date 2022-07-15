<template>
    <main class="flex flex-col font-bold">
        <PageHeading title="LAHN CINEMA" description="Get a ticket and enjoy"/>
        <p class="mb-10 text-primary">Music videos filmed, edited and directed by <span class="text-secondary">Magnus “Lahnzki” Lahn</span> under the <span class="text-secondary">orkide</span> name. </p>
        <div class="flex flex-col flex-grow mb-2 space-y-2">
            <ProjectTicket @click="isVideoModalOpen = false" title="TIPP TOPP" description=". This project was codenamed 'generic song 3' since information about Orkidé projects kept leaking to the masses." embedLink="" artist="UNDERGRUNN" length="1min 20s" date="AUG 2022"/>
            <ProjectTicket @click="isVideoModalOpen = false" title="ITALIA" description=" is the third music video produced by Orkidé. During a week in Italy the whole video was shot, edited and published. " embedLink="" artist="UNDERGRUNN" length="2min 2s" date="AUG 2022"/>
            <ProjectTicket @click="isVideoModalOpen = false" title="TRAPMOBILE" description=". This music video is actually banned in saudi arabia since it features the use of so called narcotics." embedLink="https://www.youtube.com/embed/Ri3k4XB2e7c" artist="UNDERGRUNN" length="2min 50s" date="SEP 2020"/>
        </div>
    </main>
</template>

<script setup>
import PageHeading from './PageHeading.vue';
import ProjectCard from './ProjectCard.vue';
import ProjectTicket from './ProjectTicket.vue';
</script>
