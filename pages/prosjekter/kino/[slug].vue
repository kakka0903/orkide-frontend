<template>
  <div>
    <TicketsShow :slideshow="videoProject.slideshow" @close="goBack" />
  </div>
</template>

<script setup lang="ts">
const doCacheCMSData = useRuntimeConfig().public.cacheCMSData
const { getVideoProjectBySlug } = useCMSData(doCacheCMSData)
const route = useRoute()
const { data: videoProject } = await getVideoProjectBySlug(route.params.slug)
const goBack = () => navigateTo('/prosjekter?section=kino')
// TODO: add back SEO meta
</script>
