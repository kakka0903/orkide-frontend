<template>
    <main class="flex flex-col space-y-20 ">
        <h1 class="flex-grow font-mono font-bold text-8xl text-lime-600">orkide<br>.com</h1>
    
        <div class="flex items-end justify-between">
            <div class="flex items-end text-2xl font-bold text-orange-600 ">
                <p style="text-orientation: upright; writing-mode: vertical-rl;">MERCH&nbsp;</p>
                <p style="text-orientation: upright; writing-mode: vertical-rl;">COMIN</p>
                <p class="leading-none">02. <br> 05. <br> 22.</p>
            </div>
            <div class="flex gap-4 text-xl font-bold text-lime-600">
                <BoxButton :width="3" @click="$emit('navigate', 'Socials')" >@socials*</BoxButton>
                <BoxButton :width="3" @click="$emit('navigate', 'Projects')" type="primary">projects~</BoxButton> 
            </div>
        </div>
    </main>

</template>

<script setup>
import BoxButton from './BoxButton.vue';
</script>