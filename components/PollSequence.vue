<template>
    <div>
        <TransitionGroup
            enter-active-class="transition duration-150 ease-out transform-gpu"
            enter-from-class="translate-x-10 opacity-0"
            leave-active-class="transition duration-150 ease-in transform-gpu"
            leave-to-class="-translate-x-10 opacity-0"
        >
            <SentencePoll
                v-for="poll in polls"
                :key="polls.indexOf(poll)"
                v-show="pollsIndex == polls.indexOf(poll) && showPoll"
                :sentence="poll.sentence"
                :options="poll.options"
                @selected="progress()"
            />
            <p
                v-if="pollsIndex == polls.length && showPoll"
                class="text-primary"
            >
                thanks <BlinkSmiley/>
            </p>
        </TransitionGroup>
    </div>
</template>

<script setup>
const props = defineProps({
    // delay before progressing
    delay: {
        type: Number,
        default: 700,
    },
    polls:Array,
})

const pollsIndex = ref(0);
const showPoll = ref(true);
const currentPoll = computed(() => {
    return props.polls[pollsIndex.value];
})

/* progress to the next poll */
function progress() {
    setTimeout(() => {
        showPoll.value = false;
        pollsIndex.value++;
        setTimeout(() => {
            showPoll.value = true;
        }, props.delay);
    }, props.delay)
}
</script>
