<template>
    <main class="flex-grow">
        <page-heading :title="PAGE_TITLE" :description="PAGE_SUBTITLE"></page-heading>
        <div class="pb-20">
            <DashedBox
                class="max-w-md"
                :title="INTRO_TITLE"
                :subtitle="INTRO_SUBTITLE"
                :text="INTRO_TEXT"
            />
        </div>
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


<script setup lang="ts">

const PAGE_TITLE = 'COVERART'
const PAGE_SUBTITLE = 'Discover albumart made by Orkidé'

const INTRO_TITLE = 'Lytt og Utforsk'
const INTRO_SUBTITLE = 'UTFORSK PROSESSEN BAK ORKIDÉ ALBUMCOVERE'
const INTRO_TEXT = 'I dette arkivet av coverart prosjekter kan du utforske orkide sin prosjekt-utviklings prosess gjennom skisser, utkast og tankekart. Bruk Spotify til å lytte til musikken mens du utforsker for den beste opplevelsen.'

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
