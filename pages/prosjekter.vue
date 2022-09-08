<template>
    <main class="flex flex-col flex-grow font-bold">
        <PageHeading
            title="ORKIDÉ KINO"
            description="Videoer laget av Orkidé"
        />
        <div class="flex flex-col content-start flex-grow gap-2 mb-2 sm:gap-y-3 sm:justify-center sm:items-start sm:flex-wrap sm:flex-row">
            <ProjectTicket
                v-for="musicVideo in projects"
                @watch="watchVideo(musicVideo)"
                :musicVideo="musicVideo"
                :key="musicVideo.id"
            />
        </div>
        <VideoModal
            v-if="showVideoModal"
            @close="showVideoModal = false"
            :musicVideo="videoToWatch"
        />
    </main>
</template>

<script setup>
import projects from '../data/projects'

const showVideoModal = ref(false);
const videoToWatch = ref(projects[0]);

function watchVideo(musicVideo) {
    videoToWatch.value = musicVideo;
    showVideoModal.value = true;
}

useHead({
    title: 'Orkidé - Prosjekter',
});
</script>
