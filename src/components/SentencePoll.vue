<script setup>
    import { computed, ref, watch } from 'vue'

    const props = defineProps({
        sentence: String,
        options: Array,
    })

    defineEmits(['selected'])
    var selected = ref(props.options[0])

    var selectedIndex = computed(() => {
        for(var i = 0; i < props.options.length; i++ ) {
            if (selected.value == props.options[i]) {
                return i;
            }
        }
        return -1;
    })

    /* reset chosen and selected when props change */
    watch(props, () => {
        chosen.value = false;
        selected.value = props.options[0];
    })

    const optionIndex = computed(() => props.sentence.indexOf("%o"))
    const preOption = computed(() => props.sentence.substring(0, props.sentence.indexOf("%o")))
    const postOption = computed(() => props.sentence.substring(props.sentence.indexOf("%o") + 2, props.sentence.length))
    const translate = computed(() => selectedIndex*10)
    var chosen = ref(false)
</script>

<template>
<div class="text-primary">
    <span class="lowercase">
    {{preOption}}
    <div :class="{ 'border-primary' : !chosen, 'border-secondary': chosen}" class="relative inline-block border-b-4 border-dotted group">
        <span class="opacity-0">{{selected}}</span>
        <div class="absolute top-0 left-0 flex flex-col transition-all duration-150 transform-gpu" :style="{transform: 'translateY(-'+(100/(options.length)*selectedIndex)+'%)'}">
            <button class="mb-2 text-left hover:uppercase disabled:pointer-events-none" :disabled="chosen"
                  :class="{'text-secondary' : option == selected && chosen, 'opacity-25': chosen && option != selected}"
                  :key="option" v-for="option in options"
                  @click="selected = option; chosen = true; $emit('selected', selected)">{{option}}</button>
        </div>
    </div>
    {{postOption}}
    </span>
</div>
</template>

