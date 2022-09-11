<template>
    <main class="flex-grow">
        <LoadingSection :isLoading="isLoading">
            <TransitionGroup
                :css="false"
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                appear
                tag="div"
                class="grid grid-cols-4 gap-2 sm:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 text-primary"
            >
                <NuxtLink 
                    v-for="clip in clips" 
                    :key="clip.id" 
                    :to="'/bts/'+route.params.slug+'/'+clips.indexOf(clip)" 
                    :data-index="clips.indexOf(clip)"
                >
                    <BTSCard
                        :clip="clip"
                        :number="clips.indexOf(clip)"
                    />
                </NuxtLink>
            </TransitionGroup>
            <div v-if="clips.length == 0" class="max-w-md p-5 space-y-3 border-4 col-span-full border-primary">
                <p v-if="!musicVideo">Could not find "{{route.params.slug}}" project.</p>
                <p v-else>Det finnes ikke behind the scenes innhold for <span class="italic">{{musicVideo.attributes.name}}</span> enda :(</p>
                <div class="flex justify-end">
                    <NuxtLink class="flex items-center" to="/prosjekter">
                        <ArrowLeftIcon class="w-4 h-4 mr-1"/> PROSJEKTER
                    </NuxtLink>
                </div>
            </div>
        </LoadingSection>
        <NuxtPage :clips="clips" :musicVideo="musicVideo"/>
    </main>
</template>

<script setup>
import gsap from 'gsap';
import { ArrowLeftIcon } from '@heroicons/vue/solid/index.js'

const { find } = useStrapi4();
const route = useRoute();
const musicVideo = ref(undefined)

const isLoading = ref(true);

// load clips from CMS
async function loadProject() {
    try {
        const res = await find('projects', {
            filters: {
                slug: {
                    '$eq': route.params.slug
                }
            },
            populate: ['bts_clips']
        })
        musicVideo.value = res.data[0];
        useHead({title: 'Orkide - '+musicVideo.value.attributes.name+' BTS'})
        isLoading.value = false;
    } catch (e) {}
}

const clips = computed(() => {
    return musicVideo.value ? musicVideo.value.attributes.bts_clips.data : [];
})

loadProject();

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
