<template>
    <button
        class="flex relative justify-center w-20 p-3 font-bold -mr-16 text-sm break-all transition ease-out bg-white border-[3px] group border-primary h-24 text-primary"
        :class="containerStyles"
        :disabled="!(isSelected && isNavigating)"
    >
        <slot/>
        <!-- TODO: fix lagging transition -->
        <div id="folder-tab" class="absolute w-2 h-5 border-[3px] bg-white transition -top-[3px] -right-2 border-l-0 "></div>
    </button>
</template>

<style scoped>
#folder-tab {
    border-color: inherit;
}
</style>

<script setup>
const props = defineProps({
    isSelected: Boolean,
    isNavigating: Boolean,
    isAfterSelected: Boolean
})
let containerStyles = computed(() => {
    return {
        'underline -translate-y-16 hover:border-secondary hover:text-secondary' : props.isSelected && props.isNavigating,
        '' : props.isAfterSelected && props.isNavigating,
    }
})
</script>
