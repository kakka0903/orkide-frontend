<template>
  <main v-if="_pageHeading !== undefined" class="flex-grow mb-12">
    <page-heading
      :title="_pageHeading.title"
      :description="_pageHeading.subtitle"
    />
    <div
      v-if="_pageIntro !== undefined && _pageIntro !== null"
      class="pb-20"
    >
      <PageIntroBox
        class="max-w-md"
        :title="_pageIntro.title"
        :subtitle="_pageIntro.subtitle"
        :text="_pageIntro.text"
      />
    </div>
    <slot />
  </main>
</template>

<script setup lang="ts">
interface Props {
  route: string
}
const props = defineProps<Props>()
const { _pageHeading, _pageIntro } = await usePageData(props.route)
</script>
