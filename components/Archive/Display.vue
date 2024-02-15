<template>
  <div class="flex flex-row items-stretch">
    <div class="border-r-2 border-dashed border-primary" />
    <div class="space-y-5">
      <ArchiveFolder
        v-for="folder in folders"
        :key="folder.id"
        :title="folder.title"
        :is-selected="isProjectSelected(folder.id)"
        @click="selectProject(folder)"
      >
        <div class="space-y-2">
          <ArchiveTextLink :url="getSlideShowLink(folder)">
            <PhotoIcon class="w-6 h-6" /> Se prosessen
          </ArchiveTextLink>

          <ArchiveTextLink v-for="link in folder.links" :key="link.url" :url="link.url">
            <div class="w-6 h-6" v-html="JSON.parse(link.icon).component" />
            <p>{{ link.title }}</p>
          </ArchiveTextLink>
        </div>
      </ArchiveFolder>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { PhotoIcon } from '@heroicons/vue/24/outline'
import type { FolderProject } from '~/types/Projects'

// const doCacheCMSData = useRuntimeConfig().public.cacheCMSData
// const { getCoverProjects } = useCMSData(doCacheCMSData)
// const { data: coverProjects } = await getCoverProjects()

const folders: FolderProject[] = []

function getSlideShowLink (folder: FolderProject) {
  // TODO: how can we include the ID in the type :(
  return '/prosjekter/' + folder.id
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
function selectProject (project: FolderProject) {
  const isSelected = isProjectSelected(project.id)
  selectedProjectID.value = (isSelected) ? null : project.id
}
</script>
