<template>
    <div class="flex items-center gap-5 text-primary-dark">
        <button @click="prevFolder" class="transition disabled:opacity-0 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
        </button>

        <button @click="openFolder" :disabled="!isNavigating" class="transition disabled:opacity-50 hover:text-primary">
            open
        </button>

        <button @click="nextFolder" class="transition disabled:opacity-0 hover:text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
        </button>
    </div>
</template>

<script setup>
const props = defineProps({
    selectedIndex: Number,
    isNavigating: Boolean,
    folderCount: Number
})

const emit = defineEmits([
    'update:selectedIndex',
    'update:isNavigating',
    'openFolder'
]);

const selectedIndex = computed({
    get() { return props.selectedIndex },
    set(value) { emit('update:selectedIndex', value) },
})

const isNavigating = computed({
    get() { return props.isNavigating },
    set(value) { emit('update:isNavigating', value) },
})

let { nextFolder, prevFolder } = useArchiveControls(selectedIndex, isNavigating, props.folderCount);

let openFolder = () => {
    emit('openFolder');
}
</script>
