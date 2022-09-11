<template>
    <div
        class="relative w-full border-2 border-primary hover:border-secondary"
        style="padding-top:100%;"
        :style="backgroundStyle"
    >
        <p class="absolute bottom-2 right-3 text-secondary">#0{{number}}</p>
    </div>
</template>

<script setup>

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

