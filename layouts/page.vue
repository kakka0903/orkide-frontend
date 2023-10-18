<template>
  <NuxtLayout name="default">
    <main v-if="heading !== undefined" class="flex-grow mb-12">
      <PageHeading :heading="heading" />
      <div v-if="intro !== null && intro !== undefined" class="pb-20">
        <PageIntroBox class="max-w-md" :intro="intro" />
      </div>
      <slot />
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const { heading, intro } = await usePageData(route.name?.toString())

</script>
