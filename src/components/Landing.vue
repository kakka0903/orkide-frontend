<template>
    <main class="flex flex-col">
        <transition appear
            enter-active-class="transition duration-500 ease-out transform-gpu"
            enter-from-class="translate-x-10 opacity-0"
            enter-to-class="scale-100 translate-x-0 opacity-100"
        >
            <a href="/">
                <h1 class="mt-2 font-bold leading-none text-7xl text-primary">orkidé<br>.world</h1>
            </a>
        </transition>

        <div class="flex items-center justify-center flex-grow my-20 text-xl sm:text-2xl">
            <div class="h-28">
                <transition appear
                    appear-active-class="transition duration-500 delay-150 transform-gpu"
                    enter-active-class="transition duration-150 ease-out transform-gpu"
                    enter-from-class="translate-x-10 opacity-0"
                    leave-active-class="transition duration-150 ease-in transform-gpu"
                    leave-to-class="-translate-x-10 opacity-0"
                >
                    <PollSequence :polls="polls"/>
                </transition>
            </div>
        </div>

        <div class="flex items-end justify-between">
            <div class="flex items-end text-2xl font-bold text-secondary ">
                <p style="text-orientation: upright; writing-mode: vertical-rl;">MERCH&nbsp;&nbsp;&nbsp;</p>
                <p style="text-orientation: upright; writing-mode: vertical-rl;">COMING&nbsp;</p>
                <p style="text-orientation: upright; writing-mode: vertical-rl;">SOON</p>
            </div>
            <transition appear
                enter-active-class="transition duration-500 ease-out delay-300 transform-gpu"
                enter-from-class="translate-x-10 opacity-0"
                enter-to-class="scale-100 translate-x-0 opacity-100"
            >
            <div class="flex items-end text-2xl font-bold gap-x-4 text-primary">
                <BoxButton :width="3" @click="$emit('navigate', 'kontakt')" >social</BoxButton>
                <BoxButton :width="3" @click="$emit('navigate', 'prosjekter')" type="primary">projects~</BoxButton>
            </div>
            </transition>
        </div>
    </main>
</template>

<script setup>
import BoxButton from './BoxButton.vue';
import SentencePoll from './SentencePoll.vue'
import PollSequence from './PollSequence.vue'
import { ref } from 'vue';
const polls = ref([
    {sentence:'jeg liker %o', options:['nettsiden', 'jakka', 'smilet']},
    {sentence:'mamma er %o', options:['snill', 'snill', 'snill']},
    {sentence:'en dag skal jeg %o', options:['ta LS','ha sex','dø']},
    {sentence:'lahnzki er %o', options:['hvem egt?', 'william', 'magnus']}
])
</script>
