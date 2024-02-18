<template>
  <TicketsBaseSlide>
    <DashedBox class="p-10">
      <YoutubeEmbed :youtube-id="youtube_id" />
    </DashedBox>
  </TicketsBaseSlide>
</template>

<script setup lang="ts">
defineProps<{ youtube_id: string }>()
</script>
