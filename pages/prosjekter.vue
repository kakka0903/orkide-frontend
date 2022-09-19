<template>
    <main class="flex flex-col flex-grow font-bold">
        <PageHeading
            title="ORKIDÉ KINO"
            description="Videoer laget av Orkidé"
        />
        <NuxtPage :projects="projects"/>
        <LoadingSection :isLoading="isLoading">
            <div class="flex flex-col content-start flex-grow gap-2 mb-2 gap-y-3 sm:flex-wrap sm:flex-row">
                <ProjectTicket
                    v-for="musicVideo in projects"
                    @watch="watchVideo(musicVideo)"
                    :musicVideo="musicVideo"
                    :key="musicVideo.id"
                />
            </div>
        </LoadingSection>
    </main>
</template>

<script async setup>
function watchVideo(musicVideo) {
    navigateTo('/prosjekter/'+musicVideo.attributes.slug+'/')
}

useHead({
    title: 'Orkidé - Prosjekter',
});

const projects = ref([]);
const { find } = useStrapi4();
const isLoading = ref(true);

try {
    const res = await find('projects', {
        populate: 'bts_clips',
        sort: 'year:desc'
    });
    projects.value = res.data;
    isLoading.value = false;
} catch (e) {
    console.log("error loading projects from CMS:")
    console.log(e.error)
}
</script>
