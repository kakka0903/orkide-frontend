<template>
    <main class="flex flex-col font-bold">
        <div class="flex flex-col flex-grow mb-10 space-y-5">
        <PageHeading title="LAHN CINEMA" description="Get a ticket and enjoy"/>
            <ProjectTicket title="TRAPMOBILE" artist="UNDERGRUNN" length="2min 50s" date="SEP 2020"/>
            <ProjectTicket title="TIPP TOPP" artist="UNDERGRUNN" length="1min 20s" date="AUG 2022"/>
            <ProjectTicket title="ITALIA" artist="UNDERGRUNN" length="2min 2s" date="AUG 2022"/>
            <ProjectTicket title="ITALIA" artist="UNDERGRUNN" length="2min 2s" date="AUG 2022"/>
            <ProjectTicket title="ITALIA" artist="UNDERGRUNN" length="2min 2s" date="AUG 2022"/>
        </div>
    </main>
</template>

<script setup>
import PageHeading from './PageHeading.vue';
import ProjectCard from './ProjectCard.vue';
import ProjectTicket from './ProjectTicket.vue';
</script>
