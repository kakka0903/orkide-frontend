<template>
    <article class="flex flex-col border-2 border-lime-600">
        <img :src="imgurl" alt="">
        <div class="flex gap-2 border-t-2 divide-x-2 divide-lime-600 border-lime-600 text-lime-600 divide-solid">
            <p class="flex-grow px-4 py-2 ">
                {{artist}}:<span class="text-orange-600">{{title}}</span> 
                YR:<span class="text-orange-600 ">{{year}}</span>
            </p>
            <a :href="url" class="px-4 py-2 underline visited:text-lime-800 active:text-orange-600">WATCH</a>
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