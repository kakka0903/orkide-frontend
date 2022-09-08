<template>
    <div class="flex-grow">
        <div class="grid grid-cols-4 gap-2 sm:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 text-primary">
            <ClientOnly>
                <TransitionGroup
                    :css="false"
                    @before-enter="onBeforeEnter"
                    @enter="onEnter"
                    appear
                >
                    <BTSCard
                        :clip="clip"
                        v-for="clip in musicVideo.clips"
                        :key="clip.number"
                        :data-index="clip.number"
                    />
                </TransitionGroup>
                <div v-if="musicVideo.clips.length == 0" class="p-5 border-4 col-span-full border-primary">
                    <p class="mb-5 col-span-full" >Det finnes ikke behind the scenes innhold for <span class="italic">{{musicVideo.name}}</span> enda :(</p>
                    <div class="flex justify-end">
                        <NuxtLink class="flex items-center" to="/prosjekter">
                            <ArrowLeftIcon class="w-4 h-4 mr-1"/> PROSJEKTER
                        </NuxtLink>
                    </div>
                </div>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap';
import projects  from '../../data/projects';
import { ArrowLeftIcon } from '@heroicons/vue/solid/index.js'

// get the relevant project data
const route = useRoute();
const musicVideo = computed(() => {
    return projects.find((project) => { return project.id == route.params.id })
})

// animate staggered entry of BTSClips
function onBeforeEnter(el) {
    el.style.opacity = 0
    el.style.height = 0
}
function onEnter(el, done) {
    gsap.to(el, {
        opacity: 1,
        delay: el.dataset.index * 0.25,
        ease:"expo.out",
        duration: 2,
        onComplete: done,
    })
}
</script>
