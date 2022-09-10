<script setup>
    const emit = defineEmits(['selected'])
    const props = defineProps({
        poll: Object,
    })

    const options = computed(() => {
        if(props.poll.attributes) {
            var p = props.poll.attributes
            return [p.option1, p.option2, p.option3]
        } else {
            return []
        }
    })

    const sentence = computed(() => {
        if(props.poll.attributes) {
            return props.poll.attributes.sentence;
        }  else {
            return "%o"
        }
    })

    var selectedOption = ref(options[0])
    var hasChosen = ref(false)
    function selectOption(option) {
        selectedOption.value = option;
        hasChosen.value = true;
        emit('selected', selectedOption);
    }

    var selectedIndex = computed(() => {
        for(var i = 0; i < options.value.length; i++ ) {
            if (selectedOption.value == options.value[i]) {
                return i;
            }
        }
        return -1;
    })
   
    /* styles to align selected option with sentence */
    const translateStyles = computed(() => {
        let percent = 100/(options.value.length)*selectedIndex.value;
        return { transform: 'translateY(-'+percent+'%)' }
    })

    const longestOption = computed(() => {
        var longest = options.value[0]
        options.value.forEach(element => {
            longest = longest.length < element.length ? element : longest;
        });
        return longest;
    })

    const preOption = computed(() => sentence.value.substring(0, sentence.value.indexOf("%o")))
    const postOption = computed(() => sentence.value.substring(sentence.value.indexOf("%o") + 2, sentence.value.length))
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
                    <input @click="selectOption(option)" :id="option" :name="sentence" :value="option" type="radio" class="hidden peer"/>
                    <label :for="option" v-text="option" class="cursor-pointer hover:uppercase peer-disabled:pointer-events-none whitespace-nowrap"/>
                </div>
            </div>
        </div>
        {{ postOption }}
    </div>
</template>

