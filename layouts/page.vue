<template>
  <NuxtLayout name="default">
    <main v-if="_pageHeading !== undefined" class="flex-grow mb-12">
      <page-heading
        :title="_pageHeading.title"
        :description="_pageHeading.subtitle"
      />
      <div class="pb-20">
        <PageIntroBox
          v-if="_pageIntro !== undefined"
          class="max-w-md"
          :title="_pageIntro.title"
          :subtitle="_pageIntro.subtitle"
          :text="_pageIntro.text"
        />
      </div>
      <slot />
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const { _pageHeading, _pageIntro } = await usePageData(route.name?.toString())

</script>
