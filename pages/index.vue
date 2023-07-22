<template>
    <main class="flex flex-col flex-grow">
        <div class="h-56">
            <NuxtLink to="/">
                <h1 v-show="true" class="mt-2 font-bold leading-none text-7xl text-primary">orkidé<br>.world</h1>
            </NuxtLink>
        </div>

        <div class="flex justify-center my-10 h-28">
            <Transition
                enter-active-class="transition duration-500 ease-out delay-150 transform-gpu"
                enter-from-class="translate-x-10 opacity-0"
            >
                <PollSequence v-show="appearShow" class="text-xl h-28" :polls="polls.data" netlify name="landing-page-form"/>
            </Transition>
        </div>

        <div class="flex items-end justify-end flex-grow">
            <Transition
                enter-active-class="transition duration-500 ease-out delay-300 transform-gpu"
                enter-from-class="translate-x-10 opacity-0"
                enter-to-class="scale-100 translate-x-0 opacity-100"
            >
                <div v-show="appearShow" class="flex items-end text-2xl font-bold gap-x-4 text-primary">
                    <NuxtLink to="/kontakt/"><BoxButton :width="3">social</BoxButton></NuxtLink>
                    <NuxtLink to="/prosjekter/"><BoxButton :width="3" type="primary">projects~</BoxButton></NuxtLink>
                    <NuxtLink to="/arkivet/" class="relative">
                        <BoxButton :width="3" type="primary">*ARCHIVE^</BoxButton>
                        <SpikeBadge class="absolute -top-14 -right-10 text-[20px] pointer-events-none rotate-12" >NY!</SpikeBadge>
                    </NuxtLink>
                </div>
            </Transition>
        </div>
    </main>
</template>

<script async setup>
import useAppearShow from '../composables/useAppearShow';
import polls from '/data/polls.json'
const { appearShow } = useAppearShow();

useHead({
    title: 'Orkidé',
});
</script>
