<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navigation from "./components/Navigation.vue";
import Orkide from "./components/Landing.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
import Socials from "./components/Socials.vue";
import { ref, computed } from 'vue';

const pages = {
  Orkide,
  Projects,
  Socials
}

var currentPage = ref("Orkide");
</script>

<template>
  <head>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
  </head>

  <div style="height: 100vh;" class="flex flex-col mx-8 font-mono">
    <Navigation :pages="pages" @navigate="(page) => currentPage = page"/>
    <Component @navigate="(page) => currentPage = page" :is="pages[currentPage]" class="flex-grow"></component>
    <Footer></Footer>
  </div>
</template>


