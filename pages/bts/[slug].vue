<template>
  <main class="flex-grow space-y-5">
    <h1 v-if="musicVideo !== null && musicVideo !== undefined" class="text-xl text-primary">
      {{ musicVideo.name }} BTS
    </h1>

    <TransitionGroup
      :css="false"
      tag="div"
      class="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 text-primary"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
    >
      <NuxtLink
        v-for="clip in clips"
        v-show="appearShow"
        :key="clip.id"
        :to="'/bts/'+route.params.slug+'/'+clips.indexOf(clip)+'/'"
        :data-index="clips.indexOf(clip)"
      >
        <BTSCard
          :clip="clip"
          :number="clips.indexOf(clip)"
        />
      </NuxtLink>
    </TransitionGroup>

    <!-- TODO: fix this error message -->
    <!-- <BoxNotice v-if="clips === null || clips.length == 0">
      <p v-if="musicVideo !== null && musicVideo !== undefined">
        Could not find "{{ route.params.slug }}" project.
      </p>
      <p v-else>
        Det finnes ikke behind the scenes innhold for dette video prosjektet enda :(
      </p>
      <div class="flex justify-end">
        <NuxtLink class="flex items-center text-primary" to="/prosjekter/">
          <ArrowLeftIcon class="w-4 h-4 mr-1" /> PROSJEKTER
        </NuxtLink>
      </div>
    </BoxNotice> -->

    <NuxtPage :clips="clips" :music-video="musicVideo" />
  </main>
</template>

<script setup>
import gsap from 'gsap'
import { ArrowLeftIcon } from '@heroicons/vue/24/solid/index.js'

const route = useRoute()
const { getVideoProjectBySlug, getBTSClipsByVideoProjectSlug } = useCMSData(false)
const { data: musicVideo } = await getVideoProjectBySlug(route.params.slug)
const { data: clips } = await getBTSClipsByVideoProjectSlug(route.params.slug)
const { appearShow } = useAppearShow()

// TODO: fix the SEO properties
// const metaDescription = computed(() => {
//   const vid = musicVideo.value.attributes
//   const c = clips.value
//   return 'Se ' + c.length + ' eksklusive BTS klipp fra musikkvideoen ' + vid.name + ', fremført av ' + vid.artist + ' og produsert av Orkidé.'
// })

// useHead({
//   title: 'Orkide - ' + musicVideo.value.attributes.name + ' BTS',
//   meta: [{ name: 'description', content: metaDescription.value }]
// })

// animate staggered entry of BTSClips
function onBeforeEnter (el) {
  el.style.opacity = 0
  el.style.height = 0
}
function onEnter (el, done) {
  gsap.to(el, {
    opacity: 1,
    delay: el.dataset.index * 0.25,
    ease: 'expo.out',
    duration: 2,
    onComplete: done
  })
}
</script>
