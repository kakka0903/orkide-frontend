<template>
    <main class="flex flex-col flex-grow">
        <PageHeading title="ORKIDÉ LIFE" description="Oppdater deg på alt Orkidé & UG"/>
        <div class="flex flex-col items-center mt-12 mb-24 font-mono font-bold text-secondary text-7xl sm:text-8xl">
            <a class="bg-white text-primary hover:bg-primary active:text-secondary hover:text-white"
                :href="contact.instagram_link">{{ contact.instagram_link_text }}</a>
            <a class="bg-white text-secondary hover:bg-secondary active:text-primary hover:text-white"
                :href="contact.youtube_link">{{ contact.youtube_link_text }}</a>
            <a class="bg-white text-primary hover:bg-primary active:text-secondary hover:text-white"
                :href="contact.tiktok_link">{{ contact.tiktok_link_text }} </a>
        </div>
        <p class="font-bold text-primary">For business ta kontakt på <a class="underline text-secondary"
                :href="'mailto:' + contact.contact_email">{{ contact.contact_email }}</a></p>
    </main>
</template>

<script setup>
import contact_data from '/data/contact.json'
const contact = ref(contact_data.data.attributes);
useHead({
    title: 'Orkidé - Kontakt',
    meta: [{name:'description',content:'Hold deg oppdatert på alt Orkidé og Undergrunn. Sjekk ut ekslusivt materiale på Instagram, Youtube og TikTok. Gira på samarbeid? Linkene finner du her.'}]
});
</script>



