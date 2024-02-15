<template>
  <div>
    <TicketsShow :slideshow="slideshow" @close="goBack" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const doCacheCMSData = useRuntimeConfig().public.cacheCMSData
const { getSlideshowBySlug } = useCMSData(doCacheCMSData)
const { data: slideshow } = await getSlideshowBySlug(route.params.slug)
const goBack = () => navigateTo('/prosjekter?section=kino')
// TODO: add back SEO meta
</script>
