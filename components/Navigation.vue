
<template>
    <nav class="flex items-center justify-between gap-6 py-6 text-base font-bold xs:py-8 text-primary-dark">
        <NuxtLink  to="/" :class="{ 'text-secondary' : route.path == '/'}" class="mr-auto lowercase active:text-secondary-dark hover:uppercase">órkide</NuxtLink>
        <NuxtLink
            :class="{ 'text-secondary' : route.path == path}"
            class="lowercase first:mr-auto active:text-secondary-dark hover:uppercase"
            v-for="path in paths"
            :key="path"
            :to="path"
        >
            {{path.substring(1)}}
        </NuxtLink>
    </nav>
</template>

<script setup>
import { onMounted } from 'vue';

const route = useRoute();

defineProps({
    paths: {
        required: true,
    }
})
</script>
