<template>
  <div class="overflow-x-hidden">
    <div class="flex justify-center mx-6 font-mono xs:mx-10">
      <div class="w-full min-h-screen mb-5 md:max-w-2xl xl:max-w-5xl">
        <div class="flex flex-col h-full ">
          <Navigation :links="navLinks"/>
          <NuxtPage/>
          <Footer></Footer>
        </div>
      </div>
    </div>
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
