<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navigation from "./components/Navigation.vue";
import Landing from "./components/Landing.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
import Socials from "./components/Socials.vue";
import useMusicVideos from './composables/useMusicVideos.js';
import { ref, computed } from 'vue';

const { musicVideos } = useMusicVideos();
const pages = ref(['orkidé', 'socials', 'projects'])
const currentPage = ref(pages.value[0])
</script>

<template>
  <head>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
  </head>

  <div style="height: 100vh;" class="flex flex-col mx-6 font-mono xs:mx-10">
    <Navigation :pages="pages" :currentPage="currentPage" @navigate="(page) => currentPage = page"/>
    <Landing class="flex-grow" @navigate="(page) => currentPage = page" v-show="currentPage == 'orkidé'"/>
    <Projects class="flex-grow" :musicVideos="musicVideos" v-show="currentPage == 'projects'"/>
    <Socials class="flex-grow" v-show="currentPage == 'socials'"/>
    <Footer></Footer>
  </div>
</template>


