<template>
    <BoxModal :isOpen="true" class="text-primary">
        <iframe class="w-full bg-black text-primary" height="225" :src="embedlink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>no video</iframe>
        <div class="flex items-center p-4 bg-white border-t-4 border-secondary">
            <div class="">
                <h3 class="text-3xl leading-none uppercase text-secondary">{{musicVideo.name}}</h3>
                <p class="text-sm uppercase">{{musicVideo.artist}} - {{musicVideo.year}}</p>
            </div>
        </div>
    </BoxModal>
</template>

<script setup>
import BoxModal from './BoxModal.vue';
defineProps({
    musicVideo:{
        type:Object,
        required:true,
    }
})
</script>
