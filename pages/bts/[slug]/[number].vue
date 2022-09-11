<template>
    <div>
        <BoxModal
            :isOpen="clip"
            @close="close"
            class="text-primary-dark"
        >
            <YoutubeEmbed class="w-full max-w-sm" :youtubeId="clip.attributes.youtubeId"/>
            <p v-if="clip.attributes.description" class="p-4"> {{clip.attributes.description}}</p>
        </BoxModal>
    </div>
</template>

<script setup>
const props = defineProps({
    clips: Array,
})

const route = useRoute();
const clip = computed(() => {
    return props.clips.length > 0 ? props.clips[route.params.number] : undefined;
})

function close() {
    navigateTo('/bts/'+route.params.slug);
}
</script>