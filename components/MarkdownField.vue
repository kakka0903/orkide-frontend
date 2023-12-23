<template>
  <div
    v-if="markdown !== null && markdown !== undefined"
    class="space-y-4 description-field"
    v-html="md.render(markdown)"
  />
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'
const md = MarkdownIt()
interface Props {
  markdown?: string
}
defineProps<Props>()
</script>
