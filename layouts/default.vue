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
  {display:'coverart',url:'/covers/'},
  {display:'kontakt',url:'/kontakt/'},
])

useHead({
  htmlAttrs: {
    lang: 'no'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preload', as: 'style', type: 'text/css', href: '/fonts/dejavu-font.css'},
  ],
  script:[
    { defer:'defer', src:'https://plausible.kakk.dev/js/plausible.js', 'data-domain':'orkide.world'}
  ],
  meta: [
    { name: 'description', content: 'Orkidé lager video for norkse artister som Undergrunn. Alt er regissert, filmet og redigert av Orkidé. Nettsiden inneholder også eksklusive BTS videoklipp.'},
    { name: 'theme-color', media:'(prefers-color-scheme: dark)', content:'#0011FF'}
  ]

})
</script>
