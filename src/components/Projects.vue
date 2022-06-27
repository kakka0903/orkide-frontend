<template>
    <main class="space-y-4 font-bold">
        <h1 class="text-5xl text-primary-600">PROJECTS</h1>
        <h2 class="text-xl text-orange-600">music vids for days</h2>
        <section class="space-y-4">
            <ProjectCard artist="UG" title="TRAPMOBILE" :year="2022" url="https://www.youtube.com/channel/UCWc-1iefSoth8CuMxzNFxow/videos" imgurl="album.png"/>
            <ProjectCard artist="UG" title="TRAPMOBILE" :year="2022" url="https://www.youtube.com/channel/UCWc-1iefSoth8CuMxzNFxow/videos" imgurl="album.png"/>
            <ProjectCard artist="UG" title="TRAPMOBILE" :year="2022" url="https://www.youtube.com/channel/UCWc-1iefSoth8CuMxzNFxow/videos" imgurl="album.png"/>
        </section>
    </main>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';
</script>