<template>
  <DashedBox class="p-7">
    <p class="text-2xl font-bold text-primary">
      {{ intro.title }}
    </p>
    <p v-if="intro.subtitle" class="font-bold uppercase text-secondary">
      {{ intro.subtitle }}
    </p>
    <MarkdownField class="mt-3 text-primary" :markdown="intro.text" />
  </DashedBox>
</template>

<script setup lang="ts">
import type { PageIntro } from '~/types/Pages'

interface Props {
  intro: PageIntro
}
defineProps<Props>()
</script>
