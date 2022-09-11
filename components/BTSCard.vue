<template>
    <div
        class="relative w-full border-2 border-primary hover:border-secondary"
        style="padding-top:100%;"
        :style="backgroundStyle"
        @click="isModalOpen = true"
    >
        <p class="absolute bottom-2 right-3 text-secondary">#0{{number}}</p>
        <BoxModal
            :isOpen="isModalOpen" @close="isModalOpen = false"
            class="text-primary-dark"
        >
            <YoutubeEmbed class="w-full max-w-sm" :youtubeId="clip.attributes.youtubeId"/>
            <p v-if="clip.attributes.description" class="p-4"> {{clip.attributes.description}}</p>
        </BoxModal>
    </div>
</template>

<script setup>
const isModalOpen = ref(false);

const props = defineProps({
    clip: Object,
    number: Number,
})

const backgroundStyle = computed(() => {
    if(props.clip.attributes.image) {
        return {
            "background-image" : "url( " + props.clip.attributes.image + " )",
            'background-size': 'cover',
            'background-color':'black'
        }
    }
    return '';
})
</script>

