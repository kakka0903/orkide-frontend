<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Navigation from "./components/Navigation.vue";
import Landing from "./components/Landing.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
import Socials from "./components/Socials.vue";
</script>

<template>
  <head>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
  </head>

  <div style="height: 100vh;" class="flex flex-col mx-10 font-mono">
    <Navigation></Navigation>
    <Component :is="Landing" class="flex-grow overflow-scroll"></component>
    <Footer></Footer>
  </div>
</template>


