<template>
    <div>
        <div class="grid grid-cols-4 gap-2 sm:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 text-primary">
            <TransitionGroup
                :css="false"
                @before-enter="onBeforeEnter"
                @enter="onEnter"
                appear
            >
                <BTSCard :clip="clip" v-for="clip in musicVideo.clips" :key="clip.number" :data-index="clip.number"/>
            </TransitionGroup>
        </div>
    </div>
</template>

<script setup>
import BTSCard from './BTSCard.vue';
import gsap from 'gsap';
import { onMounted, ref } from 'vue';

const props = defineProps({
    musicVideo: Object,
})

function onBeforeEnter(el) {
  el.style.opacity = 0
  el.style.height = 0
}

function onEnter(el, done) {
    gsap.to(el, {
        opacity: 1,
        delay: el.dataset.index * 0.25,
        ease:"expo.out",
        duration: 2,
        onComplete: done,
    })
    console.log('delay: ' + el.dataset.index*0.1);
}

</script>
