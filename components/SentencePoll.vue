<script setup>
    const emit = defineEmits(['selected'])
    const props = defineProps({
        sentence: String,
        options: Array,
    })

    var selectedOption = ref(props.options[0])
    var hasChosen = ref(false)
    function selectOption(option) {
        selectedOption.value = option;
        hasChosen.value = true;
        emit('selected', selectedOption);
    }

    var selectedIndex = computed(() => {
        for(var i = 0; i < props.options.length; i++ ) {
            if (selectedOption.value == props.options[i]) {
                return i;
            }
        }
        return -1;
    })

    /* styles to align selected option with sentence */
    const translateStyles = computed(() => {
        let percent = 100/(props.options.length)*selectedIndex.value;
        return { transform: 'translateY(-'+percent+'%)' }
    })

    const longestOption = computed(() => {
        var longest = props.options[0]
        props.options.forEach(element => {
            longest = longest.length < element.length ? element : longest;
        });
        return longest;
    })

    const preOption = computed(() => props.sentence.substring(0, props.sentence.indexOf("%o")))
    const postOption = computed(() => props.sentence.substring(props.sentence.indexOf("%o") + 2, props.sentence.length))
</script>

<template>
    <div class="text-primary">
        {{ preOption }}
        <div class="relative inline-block ">
            <!-- invisible text with longest option to prevent layout jank -->
            <span class="invisible" v-text="longestOption"/>

            <!-- invisible text to resize border to selected option -->
            <span
                class="absolute top-0 left-0 text-opacity-0 border-b-4 border-dotted text-primary" v-text="selectedOption"
                :class="{ 'border-primary' : !hasChosen, 'border-secondary': hasChosen}"
            />

            <!-- wrapper that alignes selected option with sentence -->
            <div
                class="absolute top-0 left-0 transition transform-gpu"
                :style="translateStyles"
            >
                <div
                    :key="option" v-for="option in options"
                    :class="{'text-secondary' : option == selectedOption && hasChosen, 'opacity-25': hasChosen && option != selectedOption}"
                    class="mb-1"
                >
                    <!-- input and label so answer can be used in a form -->
                    <input @click="selectOption(option)" :id="option" type="radio" class="hidden peer" :disabled="hasChosen"/>
                    <label :for="option" v-text="option" class="cursor-pointer hover:uppercase peer-disabled:pointer-events-none whitespace-nowrap"/>
                </div>
            </div>
        </div>
        {{ postOption }}
    </div>
</template>

