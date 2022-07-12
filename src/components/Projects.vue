<template>
    <main class="flex flex-col font-bold">
        <PageHeading title="LAHN CINEMA" description="Get a ticket and enjoy"/>
        <p class="mb-10 text-primary">Music videos filmed, edited and directed by <span class="text-secondary">Magnus “Lahnzki” Lahn</span> under the <span class="text-secondary">orkide</span> name. </p>
        <div class="flex flex-col flex-grow mb-2 space-y-5">
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
