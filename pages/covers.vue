<template>
  <main class="flex-grow mb-12">
    <page-heading :title="PAGE_TITLE" :description="PAGE_SUBTITLE" />
    <div class="pb-20">
      <PageIntroBox
        v-if="pageIntro !== undefined && pageIntro !== null"
        class="max-w-md"
        :title="pageIntro.title"
        :subtitle="pageIntro.subtitle"
        :text="pageIntro.text"
      />
    </div>
    <div class="flex flex-row items-stretch">
      <div class="border-r-2 border-dashed border-primary" />
      <div class="space-y-5">
        <ArchiveFolder
          v-for="project in coverProjects"
          :key="project.slug"
          :title="project.title"
          :is-selected="project == selectedProject"
          @click="selectProject(project)"
        >
          <div class="space-y-2">
            <ArchiveTextLink :url="getSlideShowLink(project)">
              <PhotographIcon class="w-6 h-6" /> Se prosessen
            </ArchiveTextLink>
            <ArchiveTextLink v-if="project.albumLink" :url="project.albumLink">
              <MusicNoteIcon class="w-6 h-6" /> Hør plata
            </ArchiveTextLink>
          </div>
        </ArchiveFolder>
      </div>
    </div>
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">
import { PhotographIcon, MusicNoteIcon } from '@heroicons/vue/outline'
import { AlbumCoverProject } from '~/types/CoverProjects'

// TODO: get intro slide from CMS
// TODO: add promt to leave site

const PAGE_TITLE = 'COVERART'
const PAGE_SUBTITLE = 'Discover albumart made by Orkidé'

const { data: coverProjects } = await useManyCoverProjects()
const { data: pageIntro } = await usePageIntro('covers-page')

console.log(pageIntro)

function getSlideShowLink (coverProject: AlbumCoverProject) {
  return '/covers/' + coverProject.id
}

const selectedProject: Ref<null | AlbumCoverProject> = ref(null)

function selectProject (project: AlbumCoverProject) {
  if (selectedProject.value === project) {
    selectedProject.value = null
  } else {
    selectedProject.value = project
  }
}

</script>
