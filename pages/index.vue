<template>
    <main class="flex flex-col flex-grow">
        <div class="h-56">
            <NuxtLink to="/">
                <Transition
                    enter-active-class="transition duration-500 ease-out transform-gpu"
                    enter-from-class="translate-x-10 opacity-0"
                    enter-to-class="scale-100 translate-x-0 opacity-100"
                >
                    <h1 v-show="appearShow" class="mt-2 font-bold leading-none text-7xl text-primary">orkidé<br>.world</h1>
                </Transition>
            </NuxtLink>
        </div>

        <div class="flex justify-center mb-10 h-28">
            <Transition
                enter-active-class="transition duration-500 delay-150 transform-gpu"
                enter-from-class="translate-x-10 opacity-0"
            >
                <PollSequence v-show="appearShow" class="text-xl h-28" :polls="polls"/>
            </Transition>
        </div>




        <div class="flex items-end justify-between flex-grow">
            <div class="flex items-end text-2xl font-bold text-secondary ">
                <p style="text-orientation: upright; writing-mode: vertical-rl;">PRINTS&nbsp;&nbsp;</p>
                <p style="text-orientation: upright; writing-mode: vertical-rl;">COMING&nbsp;</p>
                <p style="text-orientation: upright; writing-mode: vertical-rl;">SOON</p>
            </div>
            <Transition
                enter-active-class="transition duration-300 ease-out delay-300 transform-gpu"
                enter-from-class="translate-x-10 opacity-0"
                enter-to-class="scale-100 translate-x-0 opacity-100"
            >
                <div v-show="appearShow" class="flex items-end text-2xl font-bold gap-x-4 text-primary">
                    <NuxtLink to="/kontakt"><BoxButton :width="3">social</BoxButton></NuxtLink>
                    <NuxtLink to="/prosjekter"><BoxButton :width="3" type="primary">projects~</BoxButton></NuxtLink>
                </div>
            </Transition>
        </div>
    </main>
</template>

<script setup>
import useAppearShow from '../composables/useAppearShow';
const { appearShow } = useAppearShow();

const polls = ref([
    {sentence:'jeg liker %o', options:['nettsiden', 'jakka', 'smilet']},
    {sentence:'mamma er %o', options:['snill', 'sint', 'streng']},
    {sentence:'en dag skal jeg %o', options:['smile','ha sex','dø']},
    {sentence:'livet er et %o', options:['mareritt','hull','fly']}
])
useHead({
    title: 'Orkidé',
});
</script>
