<template>
    <form ref="pollsForm" action="/" method="POST">
        <Transition
            v-for="poll in polls"
            :key="poll.id"
            enter-active-class="transition-[transform,opacity] ease-out transform-gpu"
            enter-from-class="translate-x-10 opacity-0"
            leave-active-class="transition-[transform,opacity] ease-in transform-gpu"
            leave-to-class="-translate-x-10 opacity-0"
        >
            <SentencePoll
                v-show="pollsIndex == polls.indexOf(poll) && showPoll"
                :poll="poll"
                @selected="progress()"
            />
        </Transition>
        <p v-if="isPollsDone && showPoll" class="text-primary">
            thanks <BlinkSmiley/>
        </p>
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
const isPollsDone = computed(() => {
    return pollsIndex.value == props.polls.length;
})

/* progress to the next poll */
const pollsForm = ref();
function progress() {
    setTimeout(() => {
        showPoll.value = false;
        pollsIndex.value++;
        setTimeout(() => {
            showPoll.value = true;
            if(isPollsDone.value) {
                setTimeout(() => {
                    pollsForm.value.submit()
                }, 2200)
            }
        }, props.delay);
    }, props.delay)
}
</script>
