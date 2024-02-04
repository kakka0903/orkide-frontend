<template>
  <div>
    {{ project }}
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
const doCacheCMSData = useRuntimeConfig().public.cacheCMSData
const { getVideoProjectBySlug } = useCMSData(doCacheCMSData)
const route = useRoute()
const { data: project } = await getVideoProjectBySlug(route.params.slug as string)

const getDescription = videoProject => videoProject.artist + ' ' + videoProject.year + '. ' + videoProject.description
// TODO: add back SEO meta
</script>
