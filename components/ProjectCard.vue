<template>
  <article class="flex flex-col border-2 border-primary">
    <img :src="imgurl" alt="">
    <div class="flex gap-2 border-t-2 divide-x-2 divide-primary border-primary text-primary divide-solid">
      <p class="flex-grow px-3 py-2 ">
        {{ artist }}:<span class="text-secondary">{{ title }}</span>
        YR:<span class="text-secondary ">{{ year }}</span>
      </p>
      <a :href="url" class="px-3 py-2 underline visited:text-primary-dark active:text-secondary">WATCH</a>
    </div>
  </article>
</template>

<script setup>
defineProps({
  artist: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  imgurl: {
    type: String,
    required: true
  }
})
</script>
