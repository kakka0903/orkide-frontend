<template>
  <div>
    <VideoModal
      v-if="clip !== null && clip !== undefined && musicVideo !== null && musicVideo !== undefined"
      :youtube-id="clip.youtubeId"
      :title="musicVideo.name+' BTS #'+clips.indexOf(clip)"
      :description="clip.description"
      is-open
      @close="close"
    />
  </div>
</template>

<script setup>
const route = useRoute()
const { getVideoProjectBySlug, getBTSClipsByVideoProjectSlug } = useCMSData(false)
const { data: musicVideo } = await getVideoProjectBySlug(route.params.slug)
const { data: clips } = await getBTSClipsByVideoProjectSlug(route.params.slug)
const clip = computed(() => (clips.value !== null) ? clips.value[route.params.number] : null)

function close () {
  navigateTo('/bts/' + route.params.slug + '/')
}

// const metaDescription = computed(() => {
//   const c = clip.value
//   const vid = props.musicVideo
//   return 'Behind the scenes klipp #' + route.params.number + ' fra innspillingen av ' + vid.artist + ' videoen ' + vid.name + '.'
// })

// useHead({
//   title: 'Orkide - ' + props.musicVideo.name + ' BTS #' + route.params.number,
//   meta: [{ name: 'description', content: metaDescription.value }]
// })
</script>
