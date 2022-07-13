<template>
    <div class="absolute top-0 left-0 flex items-center justify-center w-full h-full px-10">
        <article class="relative max-w-sm font-bold border-4 border-secondary text-primary">
            <button @click="$emit('close')" class="absolute text-3xl top-2 right-4 text-primary hover:text-primary-dark active:text-secondary">X</button>
            <iframe class="w-full" height="225" :src="embedlink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="p-4 bg-white border-t-4 border-secondary">
                <h3 class="text-3xl leading-none text-secondary">{{title}}</h3>
                <p class="mb-4 text-sm ">{{artist}} - {{year}}</p>
                <p class="text-sm font-normal">{{description}}</p>
            </div>
        </article>
    </div>
</template>

<script setup>



defineProps({
    embedlink:String,
    title:String,
    artist:String,
    description:String,
    year:Number,
})
</script>
