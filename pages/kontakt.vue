<template>
  <DefaultPage route="kontakt">
    <div v-if="contact !== null">
      <div class="flex flex-col items-center mt-12 mb-24 font-mono font-bold text-secondary text-7xl sm:text-8xl">
        <a
          class="bg-background text-primary hover:bg-primary active:text-secondary hover:text-background"
          :href="contact.instagram_link"
        >{{ contact.instagram_link_text }}</a>
        <a
          class="bg-background text-secondary hover:bg-secondary active:text-primary hover:text-background"
          :href="contact.youtube_link"
        >{{ contact.youtube_link_text }}</a>
        <a
          class="bg-background text-primary hover:bg-primary active:text-secondary hover:text-background"
          :href="contact.tiktok_link"
        >{{ contact.tiktok_link_text }} </a>
      </div>
      <p class="font-bold text-primary">
        For business ta kontakt på <a
          class="underline text-secondary"
          :href="'mailto:' + contact.contact_email"
        >{{ contact.contact_email }}</a>
      </p>
    </div>
  </DefaultPage>
</template>

<script setup lang="ts">
const cacheCMSData = useRuntimeConfig().public.cacheCMSData
const { getContactData } = useCMSData(cacheCMSData)
const { data: contact } = await getContactData()
useHead({
  title: 'Orkidé - Kontakt',
  meta: [{ name: 'description', content: 'Hold deg oppdatert på alt Orkidé og Undergrunn. Sjekk ut ekslusivt materiale på Instagram, Youtube og TikTok. Gira på samarbeid? Linkene finner du her.' }]
})
</script>
