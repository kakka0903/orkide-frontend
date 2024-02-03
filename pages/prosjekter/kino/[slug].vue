<template>
  <div>
    <VideoModal
      v-if="project !== null && project !== undefined"
      :title="project.name"
      :description="getDescription(project)"
      :youtube-id="project.youtubeId"
      @close="navigateTo('/prosjekter/')"
    />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const strapi = useStrapi()
const doCacheCMSData = useRuntimeConfig().public.cacheCMSData

const getVideoProjectBySlug = () => strapi.find('projects', { filters: { slug: route.params.slug } })

const asyncOptions = {
  transform: res => res.data[0].attributes,
  server: doCacheCMSData
}

const { data: project } = await useAsyncData(
  getVideoProjectBySlug,
  asyncOptions
)

const getDescription = videoProject => videoProject.artist + ' ' + videoProject.year + '. ' + videoProject.description

// TODO: add back SEO meta
</script>
