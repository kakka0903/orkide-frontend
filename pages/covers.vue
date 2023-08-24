<template>
    <main>
        <page-heading title="ORKIDÉ COVERS" description="Album covers made by Orkidé"></page-heading>
        <div class="space-y-5">
            <div
                v-for="coverProject in coverProjects" :key="coverProject"
                class="flex items-center gap-5"
            >
                <div class="w-10 h-10 border border-primary"></div>
                <p>{{ coverProject.title }}</p>
            </div>
        </div>
    </main>
</template>


<script setup>
const coverProjects = ref([
    { id: 0, title: 'mata:come', slideshow: [1,2,3] },
    { id: 1, title: 'undergrunn', slideshow: [1,2,3] },
    { id: 2, title: 'kom og betal', slideshow: [1,2,3] }
]);
</script>
