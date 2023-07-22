
<template>
    <div class="relative h-44 w-[340px]">
        <ArchiveBox class="absolute bottom-0 z-[2]">ORKIDÉ ARCHIVE</ArchiveBox>
        <div class="absolute z-[1] flex pl-1 bottom-3 transition">
            <ArchiveFolderCover
                v-for="folder in folders"
                :isSelected="selectedId == folder.id && navigateFolders"
                :isNavigating="navigateFolders"
                :isAfterSelected="selectedIndex < folders.indexOf(folder)"
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
    navigateFolders: Boolean
})

let selectedId = computed(() => {
    return props.folders[props.selectedIndex].id;
})
</script>
