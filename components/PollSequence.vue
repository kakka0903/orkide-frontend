<template>
    <form ref="pollsForm" action="/">
        <TransitionGroup
            enter-active-class="transition-[transform,opacity] ease-out transform-gpu"
            enter-from-class="translate-x-10 opacity-0"
            leave-active-class="transition-[transform,opacity] ease-in transform-gpu"
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
            <p v-if="pollsIndex == props.polls.length && showPoll" class="text-primary">
                thanks <BlinkSmiley/>
            </p>
        </TransitionGroup>
    </form>
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

const pollsForm = ref();
watch(
    () => showPoll && pollsIndex.value == props.polls.length,
    (isPollDone) => {
        setTimeout(() => {
            pollsForm.value.submit()
        }, 2200)
    }
)
</script>
