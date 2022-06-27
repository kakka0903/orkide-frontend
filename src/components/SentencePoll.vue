<script setup>
    import { computed, ref } from 'vue'

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


    const optionIndex = computed(() => props.sentence.indexOf("%o"))
    const preOption = computed(() => props.sentence.substring(0, props.sentence.indexOf("%o")))
    const postOption = computed(() => props.sentence.substring(props.sentence.indexOf("%o") + 2, props.sentence.length))
    const translate = computed(() => selectedIndex*10)
    var chosen = ref(false)
</script>

<template>
<div class="text-primary-600">
    <span class="lowercase">
    {{preOption}}
    <div :class="{ 'border-primary-600' : !chosen, 'border-secondary-600': chosen}" class="inline-block border-b-4  border-dotted relative group">
        <span class="opacity-0">{{selected}}</span>
        <div class="transition-all transform-gpu  duration-150 absolute left-0 top-0 flex flex-col" :style="{transform: 'translateY(-'+(100/(options.length)*selectedIndex)+'%)'}">
            <button class="hover:uppercase mb-2 text-left disabled:pointer-events-none" :disabled="chosen"
                  :class="{'text-secondary-600' : option == selected && chosen, 'opacity-25': chosen && option != selected}"
                  :key="option" v-for="option in options"
                  @click="selected = option; chosen = true; $emit('selected', selected)">{{option}}</button>
        </div>
    </div>
    {{postOption}}
    </span>
</div>
</template>

