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
        <div v-for="coverProject in coverProjects" :key="coverProject.id" class="space-y-5">
          <NuxtLink class="flex items-center gap-5 group" :to="'/covers/'+coverProject.slug">
            <div class="border-b-2 border-dashed w-7 border-primary" />
            <FolderIcon class="w-16 h-16 transition text-primary group-hover:text-secondary-dark group-active:text-secondary group-visited:text-primary-dark" />
            <p class="text-lg font-bold underline transition text-primary group-hover:text-secondary-dark group-active:text-secondary group-visited:text-primary-dark">
              {{ coverProject.title }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
    <NuxtPage />
  </main>
</template>

<script setup lang="ts">

// TODO: add folder graphics
// TODO: folder selected styling

const PAGE_TITLE = 'COVERART'
const PAGE_SUBTITLE = 'Discover albumart made by Orkidé'

const INTRO_TITLE = 'Utforsk og Lytt'
const INTRO_SUBTITLE = 'PROSESSEN BAK ORKIDÉ ALBUMCOVERE'
const INTRO_TEXT = 'I dette arkivet finner du skisser, utkast og eksperimenter fra platecovere designet av Orkidé. Sjekk ut "Orkide Listen" på spotify for en spilleliste med musikken coverene er designet for!'

const { data: coverProjects } = await useAlbumCoverProjects()

</script>
