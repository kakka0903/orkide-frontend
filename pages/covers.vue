<template>
  <DefaultPage route="covers">
    <div class="flex flex-row items-stretch">
      <div class="border-r-2 border-dashed border-primary" />
      <div class="space-y-5">
        <ArchiveFolder
          v-for="project in coverProjects"
          :key="project.slug"
          :title="project.title"
          :is-selected="isProjectSelected(project.id)"
          @click="selectProject(project)"
        >
          <div class="space-y-2">
            <ArchiveTextLink :url="getSlideShowLink(project)">
              <PhotoIcon class="w-6 h-6" /> Se prosessen
            </ArchiveTextLink>
            <ArchiveTextLink v-if="project.albumLink" :url="project.albumLink">
              <MusicalNoteIcon class="w-6 h-6" /> Hør plata
            </ArchiveTextLink>
          </div>
        </ArchiveFolder>
      </div>
      <NuxtPage />
    </div>
  </DefaultPage>
</template>

<script setup lang="ts">
import { PhotoIcon, MusicalNoteIcon } from '@heroicons/vue/24/outline'
import { AlbumCoverProject } from '~/types/CoverProjects'

const { data: coverProjects } = await useManyCoverProjects()

function getSlideShowLink (coverProject: AlbumCoverProject) {
  return '/covers/' + coverProject.id
}

const selectedProjectID: Ref<null | number> = ref(null)

/**
 * Check if project is selected or not.
 * @param projectId ID of project to check.
 */
function isProjectSelected (projectId: number) {
  return selectedProjectID.value === projectId
}

/**
 * Select a project when its not selected and unselect it when it is selected.
 * @param project The project to select/unselect.
 */
function selectProject (project: AlbumCoverProject) {
  const isSelected = isProjectSelected(project.id)
  selectedProjectID.value = (isSelected) ? null : project.id
}
</script>
