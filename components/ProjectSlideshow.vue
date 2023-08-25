<template>
    <div>
        <BoxButton @click ="showSlideShow = true" :width="5" type="primary">
            OPEN*SLIDESHOW!
        </Boxbutton>

        <div v-if="showSlideShow" class="fixed inset-0 flex items-start justify-center pt-5 bg-black/70">
            <carousel class="w-full h-full">
                <slide v-for="slide in slides" :key="slide.id" class="flex justify-center h-full">
                    <div class="w-full max-w-lg p-10 space-y-20">
                        <img class="w-full bg-gray-500 shadow-2xl aspect-square" :src="getImageAttrs(slide).url">
                        <!-- <img :src="slide.image" style="object-fit: cover"> -->
                        <div class="px-10 py-5 mx-5 font-bold text-left bg-white shadow-2xl niceBorder text-primary">
                            <p>{{ slide.description }}</p>
                        </div>
                    </div>
                </slide>

                <template #addons>
                    <navigation/>
                    <pagination/>
                </template>
            </carousel>

            <BoxButton @click="showSlideShow=false" type="primary" class="fixed top-5 right-5" :width="2">
                BACK
            </BoxButton>
        </div>
    </div>
</template>

<style scoped>
.niceBorder {
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%230011FFFF' stroke-width='10' stroke-dasharray='2%2c2' stroke-dashoffset='2' stroke-linecap='butt'/%3e%3c/svg%3e");
}
</style>

<script setup>
// TODO: how to close slideshow?
// TODO: open / close transitions
// TODO: add title slide
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const props = defineProps({
    slides: Array
})

const getImageAttrs = (slide) => {
    return slide.image.data.attributes
}

const showSlideShow = ref(false);

</script>
