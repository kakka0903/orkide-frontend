<template>
  <div>
    <div class="flex flex-col content-start flex-grow gap-2 mb-2 gap-y-3 sm:flex-wrap sm:flex-row">
      <ProjectTicket
        v-for="musicVideo in projects.data"
        :key="musicVideo.id"
        :music-video="musicVideo"
      />
    </div>
    <NuxtPage :projects="projects.data" />
  </div>
</template>

<script setup lang="ts">
import projects from '~/data/projects.json'
</script>
