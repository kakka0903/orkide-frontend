<template>
  <div>
    <div
      v-if="projectsPage !== null && projectsPage !== undefined"
      class="flex flex-col content-start flex-grow gap-2 mb-2 gap-y-3 sm:flex-wrap sm:flex-row"
    >
      <ProjectTicket
        v-for="ticket in projectsPage.tickets"
        :key="ticket.id"
        :music-video="ticket"
      />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const doCacheCMSData = useRuntimeConfig().public.cacheCMSData
const { getTicketProjects } = useCMSData(doCacheCMSData)
const { data: projectsPage } = await getTicketProjects()
</script>
