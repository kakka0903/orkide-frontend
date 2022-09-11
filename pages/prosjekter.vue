<template>
    <main class="flex flex-col flex-grow font-bold">
        <PageHeading
            title="ORKIDÉ KINO"
            description="Videoer laget av Orkidé"
        />
        <div class="flex flex-col content-start flex-grow gap-2 mb-2 gap-y-3 sm:flex-wrap sm:flex-row">
            <ProjectTicket
                v-for="musicVideo in projects"
                @watch="watchVideo(musicVideo)"
                :musicVideo="musicVideo"
                :key="musicVideo.id"
            />
        </div>
        <NuxtPage :projects="projects"/>
    </main>
</template>

<script setup>
function watchVideo(musicVideo) {
    navigateTo('/prosjekter/'+musicVideo.attributes.slug)
}

useHead({
    title: 'Orkidé - Prosjekter',
});

const projects = ref([]);

// loads projects from CMS
const { find } = useStrapi4();
async function loadProjects() {
    try {
        const res = await find('projects', {populate: 'bts_clips'});
        projects.value = res.data;
    } catch (e) {
        console.log("error loading projects from CMS:")
        console.log(e.error)
    }
}
loadProjects();
</script>
