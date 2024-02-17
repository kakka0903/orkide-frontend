<template>
  <DefaultPage route="prosjekter">
    <SectionSwitcher :sections="projectSections" switch-message="bytt seksjon" />
  </DefaultPage>
</template>

<script setup lang="ts">
// TODO: disable zoom on double tap

const projectSections = [
  { title: 'KINO', component: resolveComponent('VideoProjectsDisplay') },
  { title: 'GALLERI', component: resolveComponent('ArchiveDisplay') }
]

useHead({
  title: 'Orkidé - Prosjekter',
  meta: [{ name: 'description', content: 'Se de nye Undergrunn videoene på Orkidé Kino. Alle videoer er produsert, filmet og redigert av Orkidé. Sjekk ut hits som ITALIA, DR.PLAZA og TRAPMOBILE.' }],
  link: [
    { rel: 'preconnect', href: 'https://www.youtube.com' }
  ]
})
</script>
