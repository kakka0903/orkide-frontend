<template>
    <transition appear
        enter-active-class="transition duration-300 transform transform-gpu"
        enter-from-class="-translate-y-4 opacity-0"
        leave-active-class="transition duration-150 transform-gpu"
        leave-to-class="translate-y-4 opacity-0"
    >
        <div
            v-if="!isDeleted"
            :class="{ 'text-secondary' : level=='warning', 'text-primary' : level=='success'}"
            class="fixed top-0 left-0 flex justify-center w-full cursor-pointer pointer-events-none"
        >
            <article
                @click="isDeleted = true"
                class="flex w-full max-w-sm py-3 mt-5 -mx-2 bg-white border-4 pointer-events-auto "
                :class="{ 'border-secondary' : level == 'warning', 'border-primary': level == 'success'}"
            >
                <div class="ml-3 mr-2 mt-0.5">
                    <svg v-if="level=='warning'" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <svg v-if="level=='success'" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div class="mx-2">
                    <p class="text-lg uppercase ">{{title}}</p>
                    <p class="text-sm">{{message}}</p>
                </div>
            </article>
        </div>
    </transition>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";

defineProps({
    level:{
        type:String,
        validator(value) {
            return ['warning', 'success'].includes(value);
        }
    },
    message:String,
    title:String,
})

const isDeleted = ref(false);

onMounted(() => {
    setTimeout(() => {
        isDeleted.value = true;
    }, 5000)
})
</script>
