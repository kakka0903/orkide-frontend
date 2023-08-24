<template>
    <main>
        <page-heading title="ORKIDÉ COVERS" description="Album covers made by Orkidé"></page-heading>
        <div class="space-y-5">
            <div v-for="coverProject in coverProjects" :key="coverProject" class="space-y-5">
                <button class="flex items-center gap-5" @click="selectProject(coverProject.id)">
                    <FolderIcon class="w-16 h-16 transition" :class="getProjectStyles(coverProject.id)"></FolderIcon>
                    <p class="text-lg font-bold underline transition text-primary" :class="getProjectStyles(coverProject.id)">{{ coverProject.title }}</p>
                </button>
                <ProjectSlideshow
                    v-if="selectedProjectId == coverProject.id"
                    :slides="slides"
                />
            </div>
        </div>
    </main>
</template>


<script setup>
// TODO: add folder graphics
// TODO: folder selected styling

const coverProjects = ref([
    { id: 0, title: 'mata:come' },
    { id: 1, title: 'undergrunn' },
    { id: 2, title: 'kom og betal' }
]);

const slides = ref([
    { id: 0, image: '/italia-wrapped.png', description: 'Kommentar om dette bildet. Nevner at det er endelig versjon.'},
    { id: 1, image: '/album.png', description: 'Paper Sketch #01'},
    { id: 2, image: '/album.png', description: 'Paper Sketch #02'},
])

const selectedProjectId = ref(null);
const selectProject = (projectId) => {
    let currentVal = selectedProjectId.value
    selectedProjectId.value = currentVal != projectId ? projectId  : null
}

const getProjectStyles = (projectId) => {
    return {
        'text-secondary' : projectId == selectedProjectId.value,
        'text-primary' : projectId != selectedProjectId.value,
    }
}
</script>
