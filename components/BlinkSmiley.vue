<template>
    <span>{{text}}</span>
</template>

<script setup>
var text = ref(':)');
setTimeout(() => {
    text.value = ';)'
    setTimeout(() => {
        text.value = ':)'
    }, 300);
}, 1000);
</script>
