<template>
    <article
        class="flex justify-center w-20 px-3 -mr-16 text-left break-all transition-all ease-out bg-white border-2 border-blue-600 h-28 text-primary-dark"
        :class="moveStyles"
    >
        <slot/>
    </article>
</template>

<script setup>
const props = defineProps({
    isSelected: Boolean,
    isNavigating: Boolean,
    isAfterSelected: Boolean
})
let moveStyles = computed(() => {
    return {
        'underline -translate-y-5' : props.isSelected && props.isNavigating,
        'translate-x-20' : props.isAfterSelected && props.isNavigating
    }
})
</script>
