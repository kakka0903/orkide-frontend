<template>
  <div>
    <TicketsShow :slideshow="slideshow" @close="goBack" />
  </div>
</template>

<script setup lang="ts">
const doCacheCMSData = useRuntimeConfig().public.cacheCMSData
const { getSlideshowById } = useCMSData(doCacheCMSData)
// TODO: get associated slideshow
const { data: slideshow } = getSlideshowById(1)
const goBack = () => navigateTo('/prosjekter?section=kino')
// TODO: add back SEO meta
</script>
