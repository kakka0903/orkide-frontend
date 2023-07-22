<template>
    <main class="flex flex-col flex-grow">
        <PageHeading title="ARKIVET" description="Behind the scenes and cover art"></PageHeading>

        <section class="flex flex-col items-center justify-center flex-grow w-full gap-5 pb-20">
            <ArchiveDisplay
                :folders="folders"
                :selectedIndex="selectedIndex"
                :isNavigating="isNavigating"
                @clickBox="nextFolder(); hasInteracted = true"
                @clickFolder="openFolder(folderId)"
            />
            <div class="h-10">
                <Transition
                    enter-active-class="transition duration-1000"
                    enter-from-class="opacity-0"
                >
                    <ArchiveControls
                        v-if="hasInteracted"
                        v-model:selectedIndex="selectedIndex"
                        v-model:isNavigating="isNavigating"
                        :folderCount="folders.length"
                        @openFolder="openFolder()"
                    />
                </Transition>
            </div>
        </section>
    </main>
</template>

<script setup>
useHead({
    title: 'Orkidé - Arkivet'
})

let archiveFolders = ref([
    { id: 4, name: 'mata:come'},
    { id: 5, name: 'italia'},
    { id: 6, name: 'egoland'},
    { id: 7, name: 'UNDERGRUNN'},
    { id: 8, name: '1'},
]);

const MAX_FOLDERS = 11;
let folders = computed(() => {
    return archiveFolders.value.slice(0, MAX_FOLDERS);
});

let selectedIndex = ref(0);
let isNavigating = ref(false);
let hasInteracted = ref(false);

let { nextFolder } = useArchiveControls(selectedIndex, isNavigating, folders.value.length);

// TODO: implement this functionality
let openFolder = () => {
    alert("Åpner et modal som viser frem innholdet til folderen.")
}
</script>

