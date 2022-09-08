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
    return projects.find((project) => { return project.name == route.params.name })
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
