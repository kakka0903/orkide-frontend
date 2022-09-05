<template>
  <div class="flex flex-col min-h-screen mx-6 font-mono xs:mx-10">
    <Navigation :paths="['/kontakt', '/prosjekter']"/>
    <NuxtPage/>
    <Footer></Footer>
  </div>
</template>
<script setup>
useHead({
  htmlAttrs: {
    lang: 'no'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
  ],
  script:[
    { defer:'defer', src:'https://plausible.kakk.dev/js/plausible.js', 'data-domain':'orkide.world'}
  ],
})

</script>

