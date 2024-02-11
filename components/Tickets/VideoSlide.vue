<template>
  <TicketsBaseSlide>
    <DashedBox class="p-10">
      <YoutubeEmbed :youtube-id="youtubeId" />
    </DashedBox>
  </TicketsBaseSlide>
</template>

<script setup lang="ts">
defineProps<{ youtubeId: string }>()
</script>
