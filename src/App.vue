<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navigation from "./components/Navigation.vue";
import Landing from "./components/Landing.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
import Socials from "./components/Socials.vue";
import BehindTheScenes from './components/BehindTheScenes.vue';
import { ref } from 'vue';

function viewBTS(musicVideo) {
  selectedMusicVideo.value = musicVideo;
  currentPage.value = 'bts';
}
const pages = ref(['orkidé', 'kontakt', 'prosjekter'])
const currentPage = ref(pages.value[0])
const selectedMusicVideo = ref(NaN);
</script>

<template>
  <head>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
  </head>

  <div style="height: 100vh;" class="flex flex-col mx-6 font-mono xs:mx-10">
    <Navigation :pages="pages" :currentPage="currentPage" @navigate="(page) => currentPage = page"/>
    <Landing class="flex-grow" @navigate="(page) => currentPage = page" v-if="currentPage == 'orkidé'"/>
    <Projects class="flex-grow" @bts="(musicVideo) => viewBTS(musicVideo)" v-if="currentPage == 'prosjekter'"/>
    <Socials class="flex-grow" v-if="currentPage == 'kontakt'"/>
    <BehindTheScenes class="flex-grow" v-if="currentPage == 'bts'" :musicVideo="selectedMusicVideo"/>
    <Footer></Footer>
  </div>
</template>


