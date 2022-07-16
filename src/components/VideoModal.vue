<template>
    <BoxModal :isOpen="true" class="text-primary-dark">
        <iframe class="w-full bg-black text-primary" height="225" :src="embedlink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>no video</iframe>
        <div class="p-4 bg-white border-t-4 border-secondary">
            <h3 class="text-3xl leading-none text-secondary">{{title}}</h3>
            <p class="mb-4 text-sm ">{{artist}} - {{year}}</p>
            <p class="text-sm font-normal">{{description}}</p>
        </div>
    </BoxModal>
</template>

<script setup>
import BoxModal from './BoxModal.vue';
defineProps({
    embedlink:String,
    title:String,
    artist:String,
    description:String,
    year:Number,
})
</script>
