<template>
  <main class="flex-grow mb-12 space-y-10">
    <div class="h-20 mt-2 mb-10">
      <PageHeading
        v-if="pageData !== null && pageData !== undefined && pageData.page_heading !== null"
        :heading="pageData.page_heading"
      />
    </div>
    <div
      v-if="pageData !== null && pageData !== undefined && pageData.page_intro"
      class="mb-20"
    >
      <PageIntroBox class="max-w-md" :intro="pageData.page_intro" />
    </div>
    <slot />
  </main>
</template>

<script setup lang="ts">
interface Props {
  route: string
}
const props = defineProps<Props>()
const doCacheCMSData = useRuntimeConfig().public.cacheCMSData
const { usePageData } = useCMSData(doCacheCMSData)
const { data: pageData } = await usePageData(props.route)
</script>
