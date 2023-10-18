<template>
  <main v-if="heading !== undefined" class="flex-grow mb-12">
    <PageHeading :heading="heading" />
    <div v-if="intro !== null && intro !== undefined" class="pb-20">
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
