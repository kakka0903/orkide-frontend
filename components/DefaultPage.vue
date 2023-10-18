<template>
  <main class="flex-grow mb-12 space-y-10">
    <div class="h-20 mt-2 mb-10">
      <PageHeading v-if="heading !== undefined" :heading="heading" />
    </div>
    <div v-if="intro !== null && intro !== undefined" class="mb-20">
      <PageIntroBox class="max-w-md" :intro="intro" />
    </div>
    <slot />
  </main>
</template>

<script setup lang="ts">
interface Props {
  route: string
}
const props = defineProps<Props>()
const { heading, intro } = await usePageData(props.route)
</script>
