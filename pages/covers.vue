<template>
  <main v-if="renderPage" class="flex-grow mb-12">
    <page-heading
      :title="pageData?.page_heading.title"
      :description="pageData?.page_heading.subtitle"
    />
    <div class="pb-20">
      <PageIntroBox
        v-if="pageData?.page_intro !== undefined"
        class="max-w-md"
        :title="pageData?.page_intro.title"
        :subtitle="pageData?.page_intro.subtitle"
        :text="pageData?.page_intro.text"
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

// TODO: add promt to leave site
const { data: coverProjects } = await useManyCoverProjects()
const { data: pageData } = await usePageIntro('covers-page')
const renderPage = computed(() => {
  if (pageData === null || pageData === undefined) {
    createError('could not load page data!')
    return false
  } else {
    return true
  }
})

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
