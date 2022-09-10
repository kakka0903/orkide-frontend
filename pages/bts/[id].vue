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
                        v-for="clip in clips"
                        :key="clip.id"
                        :data-index="clip.number"
                    />
                </TransitionGroup>
                <div v-if="clips.length == 0  && musicVideo" class="max-w-md p-5 border-4 col-span-full border-primary">
                    <p class="mb-5 col-span-full" >Det finnes ikke behind the scenes innhold for <span class="italic">{{musicVideo.attributes.name}}</span> enda :(</p>
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
import { ArrowLeftIcon } from '@heroicons/vue/solid/index.js'

// load clips from CMS
const clips = ref([])
const musicVideo = ref(undefined)
const route = useRoute();
const { findOne } = useStrapi4();
onMounted(async () => {
    try {
        const response = await findOne('projects', route.params.id, {populate:'bts_clips'})
        musicVideo.value = response.data;
        clips.value = response.data.attributes.bts_clips.data;
        useHead({title: 'Orkidé - BTS '+musicVideo.value.attributes.name})
    } catch (e) { 
        console.log("loading clips failed: "+e)
    }
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

useHead({title: 'Orkidé - BTS'})
</script>
