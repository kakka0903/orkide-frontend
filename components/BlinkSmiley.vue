<template>
    <span>{{text}}</span>
</template>

<script setup>
import { ref } from 'vue'
var text = ref(':)');
setTimeout(() => {
    text.value = ';)'
    setTimeout(() => {
        text.value = ':)'
    }, 300);
}, 1000);
</script>
