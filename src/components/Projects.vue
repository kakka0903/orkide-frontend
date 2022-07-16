<template>
    <main class="flex flex-col font-bold">
        <PageHeading title="LAHN CINEMA" description="Get a ticket and enjoy"/>
        <p class="mb-10 text-primary">Music videos filmed, edited and directed by <span class="text-secondary">Magnus “Lahnzki” Lahn</span> under the <span class="text-secondary">orkide</span> name. </p>
        <div class="flex flex-col flex-grow mb-2 space-y-2">
            <ProjectTicket
                v-for="musicVideo in musicVideos"
                :musicVideo="musicVideo"
                :key="musicVideo.id"
            />
        </div>
    </main>
</template>

<script setup>
import PageHeading from './PageHeading.vue';
import ProjectCard from './ProjectCard.vue';
import ProjectTicket from './ProjectTicket.vue';
import useMusicVideos from '../composables/useMusicVideos.js';
const { musicVideos } = useMusicVideos();
</script>
