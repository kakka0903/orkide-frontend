<template>
    <main>
        <page-heading title="ORKIDÉ COVERS" description="Album covers made by Orkidé"></page-heading>
        <div class="space-y-5">
            <div v-for="coverProject in coverProjects" :key="coverProject.id" class="space-y-5">
                <button class="flex items-center gap-5" @click="selectProject(coverProject.id)">
                    <FolderIcon class="w-16 h-16 transition" :class="getProjectStyles(coverProject.id)"></FolderIcon>
                    <p class="text-lg font-bold underline transition text-primary" :class="getProjectStyles(coverProject.id)">{{ coverProject.title }}</p>
                </button>
                <ProjectSlideshow
                    v-if="selectedProjectId == coverProject.id"
                    :slides="coverProject.slides"
                />
            </div>
        </div>
    </main>
</template>


<script setup>
// TODO: add folder graphics
// TODO: folder selected styling

import albumCoverProjects from '/data/albumcover-projects.json';

// simplify data model - merges attributes and id as the same object
const coverProjects = ref(albumCoverProjects.data.map((project) => {
    let newProject = project.attributes
    newProject.id = project.id
    return newProject
}));

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
