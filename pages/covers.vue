<template>
    <main class="flex-grow">
        <page-heading title="COVERART" description="Discover albumart made by Orkidé"></page-heading>
        <div class="flex flex-row items-stretch">
            <div class="border-r-2 border-dashed border-primary"></div>
            <div class="space-y-5">
                <div v-for="coverProject in coverProjects" :key="coverProject.id" class="space-y-5">
                    <NuxtLink class="flex items-center gap-5 group" :to="'/covers/'+coverProject.slug">
                        <div class="border-b-2 border-dashed w-7 border-primary"></div>
                        <FolderIcon class="w-16 h-16 transition text-primary group-hover:text-secondary-dark group-active:text-secondary group-visited:text-primary-dark"></FolderIcon>
                        <p class="text-lg font-bold underline transition text-primary group-hover:text-secondary-dark group-active:text-secondary group-visited:text-primary-dark">{{ coverProject.title }}</p>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <NuxtPage></NuxtPage>
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
</script>
