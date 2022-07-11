<template>
    <main class="flex flex-col">
        <h1 class="mt-12 font-bold text-7xl text-primary">orkide<br>.com</h1>

        <div class="flex items-center justify-center flex-grow">
            <SentencePoll  class="mb-20 text-lg" sentence="i really enjoy %o? " :options="['life', 'sex']" :intitalSelection="0" />
        </div>

        <div class="flex items-end justify-between">
            <div class="flex items-end text-2xl font-bold text-secondary ">
                <p style="text-orientation: upright; writing-mode: vertical-rl;">MERCH&nbsp;</p>
                <p style="text-orientation: upright; writing-mode: vertical-rl;">COMIN</p>
                <p class="leading-none">02. <br> 05. <br> 22.</p>
            </div>
            <div class="flex text-xl font-bold gap-x-4 text-primary">
                <BoxButton :width="3" @click="$emit('navigate', 'Socials')" >@socials*</BoxButton>
                <BoxButton :width="3" @click="$emit('navigate', 'Projects')" type="primary">projects~</BoxButton>
            </div>
        </div>
    </main>
</template>

<script setup>
import BoxButton from './BoxButton.vue';
import SentencePoll from './SentencePoll.vue'
</script>
