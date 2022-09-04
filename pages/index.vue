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
                <p style="text-orientation: upright; writing-mode: vertical-rl;">PRINTS&nbsp;&nbsp;</p>
                <p style="text-orientation: upright; writing-mode: vertical-rl;">COMING&nbsp;</p>
                <p style="text-orientation: upright; writing-mode: vertical-rl;">SOON</p>
            </div>
            <transition appear
                enter-active-class="transition duration-500 ease-out delay-300 transform-gpu"
                enter-from-class="translate-x-10 opacity-0"
                enter-to-class="scale-100 translate-x-0 opacity-100"
            >
            <div class="flex items-end text-2xl font-bold gap-x-4 text-primary">
                <NuxtLink to="/kontakt">
                    <BoxButton :width="3">social</BoxButton>
                </NuxtLink>
                <NuxtLink to="/prosjekter">
                    <BoxButton :width="3" @click="$emit('navigate', 'prosjekter')" type="primary">projects~</BoxButton>
                </NuxtLink>
            </div>
            </transition>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
const polls = ref([
    {sentence:'jeg liker %o', options:['nettsiden', 'jakka', 'smilet']},
    {sentence:'mamma er %o', options:['snill', 'sint', 'streng']},
    {sentence:'en dag skal jeg %o', options:['smile','ha sex','dø']},
    {sentence:'livet er et %o', options:['mareritt','hull','fly']}
])
</script>
