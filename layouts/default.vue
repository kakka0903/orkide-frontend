<template>
  <div class="flex flex-col min-h-screen mx-6 font-mono xs:mx-10">
    <Navigation :links="navLinks"/>
    <NuxtPage/>
    <Footer></Footer>
  </div>
</template>

<script setup>
const navLinks = ref([
  {display:'orkide',url:'/'},
  {display:'prosjekter',url:'/prosjekter/'},
  {display:'kontakt',url:'/kontakt/'},
])

useHead({
  htmlAttrs: {
    lang: 'no'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'stylesheet', type: 'text/css', href: '/dejavu-font.css'},
  ],
  script:[
    { defer:'defer', src:'https://plausible.kakk.dev/js/plausible.js', 'data-domain':'orkide.world'}
  ],
  meta: [
    { name: 'description', content: 'UNDERGRUNN musikkvideoer regissert, filmet og redigert av Orkidé. Se også eksklusive videoklipp fra innspillingen av UG musikkvideoer som ITALIA.'}
  ]

})
</script>
