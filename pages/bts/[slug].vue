<template>
  <main class="flex-grow space-y-5">
    <h1 class="text-xl text-primary">
      {{ musicVideo.attributes.name }} BTS
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
    <BoxNotice v-if="clips.length == 0">
      <p v-if="!musicVideo">
        Could not find "{{ route.params.slug }}" project.
      </p>
      <p v-else>
        Det finnes ikke behind the scenes innhold for <span class="italic">{{ musicVideo.attributes.name }}</span> enda :(
      </p>
      <div class="flex justify-end">
        <NuxtLink class="flex items-center text-primary" to="/prosjekter/">
          <ArrowLeftIcon class="w-4 h-4 mr-1" /> PROSJEKTER
        </NuxtLink>
      </div>
    </BoxNotice>
    <NuxtPage :clips="clips" :music-video="musicVideo" />
  </main>
</template>

<script setup>
import gsap from 'gsap'
import { ArrowLeftIcon } from '@heroicons/vue/solid/index.js'
import projects from '~/data/projects.json'
const { appearShow } = useAppearShow()

const route = useRoute()
const musicVideo = computed(() => {
  return projects.data.find((project) => {
    return project.attributes.slug === route.params.slug
  })
})
const clips = computed(() => {
  return musicVideo.value.attributes.bts_clips.data
})

const metaDescription = computed(() => {
  const vid = musicVideo.value.attributes
  const c = clips.value
  return 'Se ' + c.length + ' eksklusive BTS klipp fra musikkvideoen ' + vid.name + ', fremført av ' + vid.artist + ' og produsert av Orkidé.'
})

useHead({
  title: 'Orkide - ' + musicVideo.value.attributes.name + ' BTS',
  meta: [{ name: 'description', content: metaDescription.value }]
})

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
