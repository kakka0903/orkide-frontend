<template>
  <nav class="flex items-center justify-between gap-3 py-6 text-base font-bold xs:py-8 xs:gap-6 text-primary-dark">
    <NuxtLink
      v-for="link in links"
      :key="link.display"
      :to="link.url"
      :class="{'text-secondary' : route.path == link.url}"
      class="lowercase first:mr-auto active:text-secondary-dark hover:uppercase"
    >
      {{ link.display }}
    </NuxtLink>
  </nav>
</template>

<script setup>

const route = useRoute()

defineProps({
  links: {
    required: true
  }
})
</script>
