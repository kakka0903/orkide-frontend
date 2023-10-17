<template>
  <DefaultPage route="covers">
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
      <NuxtPage />
    </div>
  </DefaultPage>
</template>

<script setup lang="ts">
import { PhotographIcon, MusicNoteIcon } from '@heroicons/vue/outline'
import { AlbumCoverProject } from '~/types/CoverProjects'

const { data: coverProjects } = await useManyCoverProjects()

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
