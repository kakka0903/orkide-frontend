<template>
    <div class="flex gap-5">
        <BoxButton @click="prevFolder" :width="2" type="secondary">PREV</BoxButton>
        <BoxButton @click="openFolder" :width="3" type="primary" :disabled="!isNavigating">BROWSE</BoxButton>
        <BoxButton @click="nextFolder" :width="2" type="secondary">NEXT</BoxButton>
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
