<script setup>
const emit = defineEmits(['selected'])
const props = defineProps({
  poll: Object
})

const options = computed(() => {
  if (props.poll) {
    const p = props.poll
    return [p.option1, p.option2, p.option3]
  } else {
    return []
  }
})

const sentence = computed(() => {
  if (props.poll) {
    return props.poll.sentence
  } else {
    return '%o'
  }
})

const selectedOption = computed(() => {
  return options.value[selectedIndex.value]
})

const hasChosen = ref(false)
const selectedIndex = ref(0)
function selectOption (option) {
  selectedIndex.value = options.value.indexOf(option)
  hasChosen.value = true
  emit('selected', selectedOption)
}

/* styles to align selected option with sentence */
const translateStyles = computed(() => {
  const percent = 100 / (options.value.length) * selectedIndex.value
  return { transform: 'translateY(-' + percent + '%)' }
})

const longestOption = computed(() => {
  let longest = options.value[0]
  options.value.forEach((element) => {
    longest = longest.length < element.length ? element : longest
  })
  return longest
})

const preOption = computed(() => sentence.value.substring(0, sentence.value.indexOf('%o')))
const postOption = computed(() => sentence.value.substring(sentence.value.indexOf('%o') + 2, sentence.value.length))
</script>

<template>
  <div class="text-primary">
    {{ preOption }}
    <div class="relative inline-block ">
      <!-- invisible text with longest option to prevent layout jank -->
      <span class="invisible" v-text="longestOption" />

      <!-- invisible text to resize border to selected option -->
      <span
        class="absolute top-0 left-0 text-opacity-0 border-b-4 border-dotted text-primary"
        :class="{ 'border-primary' : !hasChosen, 'border-secondary': hasChosen}"
        v-text="selectedOption"
      />

      <!-- wrapper that alignes selected option with sentence -->
      <div
        class="absolute top-0 left-0 transition transform-gpu"
        :style="translateStyles"
      >
        <div
          v-for="option in options"
          :key="option"
          :class="{'text-secondary' : option == selectedOption && hasChosen, 'opacity-25': hasChosen && option != selectedOption}"
          class="mb-1"
        >
          <!-- input and label so answer can be used in a form -->
          <input
            :id="option"
            :name="sentence"
            :value="option"
            type="radio"
            class="hidden peer"
            @click="selectOption(option)"
          >
          <label :for="option" class="cursor-pointer hover:uppercase peer-disabled:pointer-events-none whitespace-nowrap" v-text="option" />
        </div>
      </div>
    </div>
    {{ postOption }}
  </div>
</template>
