<template>
        <div class="flex text-black gap-x-1">
            <button
                :class="{'text-primary' : selected == 'down'}"
                class="hover:text-secondary active:text-primary"
                @click="select('down')"
            >
                <ThumbDownIcon class="w-6 h-6"/>
            </button>
            <button
                :class="{ 'text-primary' : selected == 'up'}"
                class="hover:text-secondary active:text-primary"
                @click="select('up')"
            >
                <ThumbUpIcon class="w-6 h-6"/>
            </button>
        </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { ThumbDownIcon, ThumbUpIcon } from "@heroicons/vue/outline";
const selected = ref('');
function select(type) {
    selected.value = selected.value == type ? '' : type;
}
</script>
