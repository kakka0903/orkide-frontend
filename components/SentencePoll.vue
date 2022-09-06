<script setup>
    const emit = defineEmits(['selected'])
    const props = defineProps({
        sentence: String,
        options: Array,
    })

    const formElement = ref();

    var selectedOption = ref(props.options[0])
    var hasChosen = ref(false)
    function selectOption(option) {
        selectedOption.value = option;
        hasChosen.value = true;
        emit('selected', selectedOption);
        // formElement.value.submit()
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

    const optionIndex = computed(() => props.sentence.indexOf("%o"))
    const preOption = computed(() => props.sentence.substring(0, props.sentence.indexOf("%o")))
    const postOption = computed(() => props.sentence.substring(props.sentence.indexOf("%o") + 2, props.sentence.length))
</script>

<template>
    <form
        :name="sentence"
        ref="formElement"
        method="post"
    >
        <span class="lowercase text-primary">

            {{preOption}}

            <div
                :class="{ 'border-primary' : !hasChosen, 'border-secondary': hasChosen}"
                class="relative inline-block border-b-4 border-dotted"
            >
                <span class="opacity-0">{{selectedOption}}</span>
                <div
                    class="absolute top-0 left-0 flex flex-col transition-all duration-150 transform-gpu"
                    :style="translateStyles"
                >
                    <div
                        class="mb-2 text-left"
                        :name="sentence"
                        :key="option" v-for="option in options"
                        @click="selectOption(option)"
                    >
                        <input
                            class="hidden"
                            :value="option"
                            :disabled="hasChosen"
                            name="option"
                            type="radio"
                        >
                        <label
                            class="cursor-pointer hover:uppercase whitespace-nowrap"
                            :class="{'text-secondary' : option == selectedOption && hasChosen, 'opacity-25': hasChosen && option != selectedOption}"
                            :for="option"
                            v-text="option"
                        />
                    </div>
                </div>
            </div>

            {{postOption}}

        </span>
    </form>
</template>

