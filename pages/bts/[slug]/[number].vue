<template>
  <div>
    <VideoModal
      :youtube-id="clip.attributes.youtubeId"
      :title="musicVideo.attributes.name+' BTS #'+clips.indexOf(clip)"
      :description="clip.attributes.description"
      is-open
      @close="close"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  clips: Array,
  musicVideo: Object
})

const route = useRoute()
const clip = computed(() => {
  return props.clips[route.params.number]
})

function close () {
  navigateTo('/bts/' + route.params.slug + '/')
}

const metaDescription = computed(() => {
  const c = clip.value.attributes
  const vid = props.musicVideo.attributes
  return 'Behind the scenes klipp #' + route.params.number + ' fra innspillingen av ' + vid.artist + ' videoen ' + vid.name + '.'
})

useHead({
  title: 'Orkide - ' + props.musicVideo.attributes.name + ' BTS #' + route.params.number,
  meta: [{ name: 'description', content: metaDescription.value }]
})
</script>
