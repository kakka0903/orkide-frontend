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
        <NuxtChild/>
    </main>
</template>

<script setup>
const projects = ref([]);
const { find } = useStrapi4();
onMounted(async () => {
    try {
        var response = await find('projects', {populate:['bts_clips']});
        projects.value = response["data"]
    } catch (e) {}
})

function watchVideo(musicVideo) {
    navigateTo('/prosjekter/'+musicVideo.id)
}

useHead({
    title: 'Orkidé - Prosjekter',
});
</script>
