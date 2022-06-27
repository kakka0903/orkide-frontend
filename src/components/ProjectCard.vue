<template>
    <article class="flex flex-col border-2 border-primary-600">
        <img :src="imgurl" alt="">
        <div class="flex gap-2 border-t-2 divide-x-2 divide-primary-600 border-primary-600 text-primary-600 divide-solid">
            <p class="flex-grow px-3 py-2 ">
                {{artist}}:<span class="text-secondary-600">{{title}}</span> 
                YR:<span class="text-secondary-600 ">{{year}}</span>
            </p>
            <a :href="url" class="px-3 py-2 underline visited:text-primary-800 active:text-secondary-600">WATCH</a>
        </div>
    </article>
</template>

<script setup>
defineProps({
    artist: {
        type:String,
        required: true,
    },
    title: {
        type:String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    imgurl: {
        type: String,
        required: true,
    }
})
</script>