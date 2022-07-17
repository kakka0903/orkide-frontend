<template>
    <SentencePoll
        v-if="pollsIndex < polls.length"
        :sentence="currentPoll.sentence"
        :options="currentPoll.options"
        @selected="progress()"
    />
    <p class="text-primary" v-else>
        thanks
        <BlinkSmiley/>
    </p>
</template>

<script setup>
import SentencePoll from './SentencePoll.vue';
import BlinkSmiley from './BlinkSmiley.vue';
import { computed, ref } from 'vue';

const props = defineProps({
    // delay before progressing
    delay: {
        type: Number,
        default: 700,
    },
    polls:Array,
})

const pollsIndex = ref(0);
const currentPoll = computed(() => {
    return props.polls[pollsIndex.value];
})

/* progress to the next poll */
function progress() {
    setTimeout(() => {
        pollsIndex.value++;
    }, props.delay)
}
</script>
