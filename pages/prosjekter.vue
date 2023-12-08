<template>
  <DefaultPage route="prosjekter">
    <VideoProjectsDisplay />
  </DefaultPage>
</template>

<script setup>
// TODO: disable zoom on double tap

useHead({
  title: 'Orkidé - Prosjekter',
  meta: [{ name: 'description', content: 'Se de nye Undergrunn videoene på Orkidé Kino. Alle videoer er produsert, filmet og redigert av Orkidé. Sjekk ut hits som ITALIA, DR.PLAZA og TRAPMOBILE.' }],
  link: [
    { rel: 'preconnect', href: 'https://www.youtube.com' }
  ]
})
</script>
