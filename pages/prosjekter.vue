<template>
  <DefaultPage route="prosjekter">
    <NuxtPage :projects="projects.data" />
    <div class="flex flex-col content-start flex-grow gap-2 mb-2 gap-y-3 sm:flex-wrap sm:flex-row">
      <ProjectTicket
        v-for="musicVideo in projects.data"
        :key="musicVideo.id"
        :music-video="musicVideo"
      />
    </div>
  </DefaultPage>
</template>

<script setup>
// TODO: disable zoom on double tap

import projects from '~/data/projects.json'
useHead({
  title: 'Orkidé - Prosjekter',
  meta: [{ name: 'description', content: 'Se de nye Undergrunn videoene på Orkidé Kino. Alle videoer er produsert, filmet og redigert av Orkidé. Sjekk ut hits som ITALIA, DR.PLAZA og TRAPMOBILE.' }],
  link: [
    { rel: 'preconnect', href: 'https://www.youtube.com' }
  ]
})
</script>
