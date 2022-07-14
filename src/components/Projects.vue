<template>
    <main class="flex flex-col font-bold">
        <PageHeading title="LAHN CINEMA" description="Get a ticket and enjoy"/>
        <p class="mb-10 text-primary">Music videos filmed, edited and directed by <span class="text-secondary">Magnus “Lahnzki” Lahn</span> under the <span class="text-secondary">orkide</span> name. </p>
        <div class="flex flex-col flex-grow mb-2 space-y-2">
            <ProjectTicket @click="isVideoModalOpen = true" title="TRAPMOBILE" artist="UNDERGRUNN" length="2min 50s" date="SEP 2020"/>
            <ProjectTicket @click="isVideoModalOpen = true" title="TIPP TOPP" artist="UNDERGRUNN" length="1min 20s" date="AUG 2022"/>
            <ProjectTicket @click="isVideoModalOpen = true" title="ITALIA" artist="UNDERGRUNN" length="2min 2s" date="AUG 2022"/>
        </div>
        <button v-if="isVideoModalOpen" class="absolute top-0 left-0 w-full h-full bg-black opacity-50"></button>
        <VideoModal @close="isVideoModalOpen = !isVideoModalOpen" v-show="isVideoModalOpen" title="TRAPMOBILE" year="2020" description="Some description about the video. Most ambitious project by the orkide team ever created. Directed and edited by @williamnymoen and @lahnzki" artist="UNDERGRUNN" embedlink="https://www.youtube.com/embed/Ri3k4XB2e7c"/>
    </main>
</template>

<script setup>
import PageHeading from './PageHeading.vue';
import ProjectCard from './ProjectCard.vue';
import ProjectTicket from './ProjectTicket.vue';
import VideoModal from './VideoModal.vue';

import { ref } from 'vue';
const isVideoModalOpen = ref(false);
</script>
