<template>
    <article
        class="flex relative justify-center w-20 p-3 font-bold -mr-16 text-sm break-all transition-all ease-out bg-white border-[3px] border-primary h-24 text-primary"
        :class="moveStyles"
    >
        <slot/>
        <!-- TODO: fix lagging transition -->
        <div class="absolute w-2 h-5 border-[3px] bg-white border-primary group-hover:border-secondary-dark transition -top-[3px] -right-2 border-l-0 "></div>
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
        'underline -translate-y-16' : props.isSelected && props.isNavigating,
        '' : props.isAfterSelected && props.isNavigating,
    }
})
</script>
