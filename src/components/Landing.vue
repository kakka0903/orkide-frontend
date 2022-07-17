<template>
    <main class="flex flex-col tra">

        <transition appear
            enter-active-class="transition duration-500 ease-out transform-gpu"
            enter-from-class="translate-x-10 opacity-0"
            enter-to-class="scale-100 translate-x-0 opacity-100"
        >
            <a href="">
                <h1 class="mt-2 font-bold leading-none text-7xl text-primary">orkidé<br>.com</h1>
            </a>
        </transition>

        <transition appear
            enter-active-class="transition duration-500 ease-out delay-700 transform-gpu"
            enter-from-class="translate-x-10 opacity-0"
            enter-to-class="scale-100 translate-x-0 opacity-100"
        >
            <div class="flex items-center justify-center flex-grow delay-150">
                <SentencePoll class="mb-20 text-2xl" sentence="i really enjoy %o? " :options="['life', 'sex']" :intitalSelection="0" />
            </div>
        </transition>

        <div class="flex items-end justify-between">
            <div class="flex items-end text-2xl font-bold text-secondary ">
                <p style="text-orientation: upright; writing-mode: vertical-rl;">MERCH&nbsp;</p>
                <p style="text-orientation: upright; writing-mode: vertical-rl;">COMIN</p>
                <p class="leading-none">02. <br> 05. <br> 22.</p>
            </div>
            <transition appear
                enter-active-class="transition duration-500 ease-out delay-300 transform-gpu"
                enter-from-class="translate-x-10 opacity-0"
                enter-to-class="scale-100 translate-x-0 opacity-100"
            >
            <div class="flex items-end text-2xl font-bold gap-x-4 text-primary">
                <BoxButton :width="3" @click="$emit('navigate', 'socials')" >social</BoxButton>
                <BoxButton :width="3" @click="$emit('navigate', 'projects')" type="primary">projects~</BoxButton>
            </div>
            </transition>
        </div>
    </main>
</template>

<script setup>
import BoxButton from './BoxButton.vue';
import SentencePoll from './SentencePoll.vue'
</script>
