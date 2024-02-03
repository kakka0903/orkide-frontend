<template>
  <div>
    <div
      v-if="projects !== null && projects !== undefined"
      class="flex flex-col content-start flex-grow gap-2 mb-2 gap-y-3 sm:flex-wrap sm:flex-row"
    >
      <ProjectTicket
        v-for="musicVideo in projects"
        :key="musicVideo.id"
        :music-video="musicVideo"
      />
      <NuxtPage :projects="projects.data" />
    </div>
  </div>
</template>

<script setup lang="ts">

const strapi = useStrapi()
const doCacheCMSData = useRuntimeConfig().public.cacheCMSData

const getVideoProjects = () => strapi.find('projects', {
  sort: ['release_date:desc']
})

const asyncOptions = {
  transform: res => res.data.map(project => project.attributes),
  server: doCacheCMSData
}

const { data: projects } = await useAsyncData(
  getVideoProjects, asyncOptions
)
</script>
