<template>
    <main class="space-y-5 font-bold">
        <h1 class="text-5xl text-lime-900">PROJECTS</h1>
        <h2 class="text-xl text-orange-600">music vids for days</h2>
        <ProjectCard artist="UG" title="TRAPMOBILE" :year="2022" url="https://www.youtube.com/channel/UCWc-1iefSoth8CuMxzNFxow/videos" imgurl="album.png"/>
        <ProjectCard artist="UG" title="TRAPMOBILE" :year="2022" url="https://www.youtube.com/channel/UCWc-1iefSoth8CuMxzNFxow/videos" imgurl="album.png"/>
        <ProjectCard artist="UG" title="TRAPMOBILE" :year="2022" url="https://www.youtube.com/channel/UCWc-1iefSoth8CuMxzNFxow/videos" imgurl="album.png"/>
    </main>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';
</script>