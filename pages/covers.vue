<template>
  <main class="flex-grow">
    <page-heading :title="PAGE_TITLE" :description="PAGE_SUBTITLE" />
    <div class="pb-20">
      <PageIntroBox
        class="max-w-md"
        :title="INTRO_TITLE"
        :subtitle="INTRO_SUBTITLE"
        :text="INTRO_TEXT"
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
              <VideoCameraIcon class="w-6 h-6" /> Se prosessen
            </ArchiveTextLink>
            <ArchiveTextLink :url="getAlbumLink(project)">
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
import { VideoCameraIcon, MusicNoteIcon } from '@heroicons/vue/outline'
import { AlbumCoverProject } from '~/types/CoverProjects'
// TODO: add folder graphics
// TODO: folder selected styling

const PAGE_TITLE = 'COVERART'
const PAGE_SUBTITLE = 'Discover albumart made by Orkidé'

const INTRO_TITLE = 'Utforsk og Lytt'
const INTRO_SUBTITLE = 'PROSESSEN BAK ORKIDÉ ALBUMCOVERE'
const INTRO_TEXT = 'I dette arkivet finner du skisser, utkast og eksperimenter fra platecovere designet av Orkidé. Sjekk ut "Orkide Listen" på spotify for en spilleliste med musikken coverene er designet for!'

const { data: coverProjects } = await useAlbumCoverProjects()

function getSlideShowLink (coverProject: AlbumCoverProject) {
  return '/covers/' + coverProject.slug
}

function getAlbumLink (coverProject: AlbumCoverProject) {
  return '/covers/' + coverProject.slug
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
