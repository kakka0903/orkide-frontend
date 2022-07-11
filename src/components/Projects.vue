<template>
    <main class=" flex flex-col font-bold">
        <PageHeading class="mb-14 mt-10 " title="LAHN CINEMA" description="lahnzki's OG music videos"/>
        <section class="space-y-4">
            <ProjectCard artist="UG" title="TRAPMOBILE" :year="2022" url="https://www.youtube.com/channel/UCWc-1iefSoth8CuMxzNFxow/videos" imgurl="album.png"/>
            <ProjectCard artist="UG" title="TRAPMOBILE" :year="2022" url="https://www.youtube.com/channel/UCWc-1iefSoth8CuMxzNFxow/videos" imgurl="album.png"/>
            <ProjectCard artist="UG" title="TRAPMOBILE" :year="2022" url="https://www.youtube.com/channel/UCWc-1iefSoth8CuMxzNFxow/videos" imgurl="album.png"/>
        </section>
    </main>
</template>

<script setup>
import PageHeading from './PageHeading.vue';
import ProjectCard from './ProjectCard.vue';
</script>
