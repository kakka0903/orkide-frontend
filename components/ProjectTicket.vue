<template>
    <div @click="isFlipped = !isFlipped" class="relative max-w-xs h-[123px] w-full">
        <div class="relative w-full h-full text-left">
            <TransitionGroup
                enter-active-class="transition duration-300"
                enter-from-class="translate-x-16 opacity-0"
                enter-to-class="translate-x-0 opacity-100"
                leave-active-class="transition duration-300"
                leave-from-class="translate-x-0 opacity-100"
                leave-to-class="-translate-x-16 opacity-0"
            >
                <ProjectTicketFront :musicVideo="musicVideo" class="absolute top-0 left-0" v-show="!isFlipped" key="front"/>
                <ProjectTicketBack  :musicVideo="musicVideo" class="absolute top-0 left-0" v-show="isFlipped"  key="back" @watch="$emit('watch')"/>
            </TransitionGroup>
        </div>
    </div>
</template>

<script setup>
const isFlipped = ref(false);
const props = defineProps({
    musicVideo: {
        type: Object,
        required: true,
    }
})
const hasClips = computed(() => {
    return props.musicVideo.attributes.bts_clips.data.length > 0
})
const emit = defineEmits(['watch']);
</script>
