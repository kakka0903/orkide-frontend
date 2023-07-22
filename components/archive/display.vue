
<template>
    <div class="relative h-44 w-[340px]">
        <ArchiveBox class="absolute bottom-0 z-[2]" @click="clickBox()">ORKIDÉ ARCHIVE</ArchiveBox>
        <div class="absolute z-[1] flex pl-3 bottom-10 transition">
            <ArchiveFolderCover
                v-for="folder in folders"
                :isSelected="selectedId == folder.id && isNavigating"
                :isNavigating="isNavigating"
                :isAfterSelected="selectedIndex < folders.indexOf(folder)"
                @click="clickFolder(folder.id)"
            >
                {{ folder.name }}
            </ArchiveFolderCover>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    folders: Array,
    selectedIndex: Number,
    isNavigating: Boolean
})

let selectedId = computed(() => {
    return props.folders[props.selectedIndex].id;
})

const emit = defineEmits(['clickFolder', 'clickBox'])
let clickFolder = (folderId) => {
    emit('clickFolder', folderId)
}
let clickBox = () => {
    emit('clickBox');
}
</script>
