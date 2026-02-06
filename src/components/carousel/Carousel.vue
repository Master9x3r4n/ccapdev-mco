<script setup>
import ApartmentCardSmall from '../apartment-cards/ApartmentCardSmall.vue';
import CarouselContent from './CarouselContent.vue';
import CarouselScrollButton from './CarouselScrollButton.vue';
import {ref} from 'vue';

const props = defineProps(['items']);
const items = ref(props.items);
const carouselContent = ref();

const scroll = (direction) => {
    const carousel = carouselContent.value;
    if (carousel) {        
        const scrollValue = carousel.clientWidth;

        console.log(carousel.scrollBy())

        carousel.scrollBy({
            left: direction == 'left' ? -scrollValue : scrollValue,
            behavior: 'smooth'
        })

        // Source btw: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
    }
};

</script>

<template>
<div class = "relative max-w-4xl mx-auto flex justify-center items-center w-[440px]">
    <div ref = "carouselContent"
    class = "overflow-x-auto overflow-y-hidden scroll-smooth hide-scrollbar w-full">
        <CarouselContent>
            <!-- Content -->
            <template v-for="i in items" :key="i.id">
                <!-- <div class = "card-container h-48 flex-none basis-[18rem] flex justify-center items-center gap-4">
                    {{ i }}
                </div> -->
                <ApartmentCardSmall class="flex shrink-0">
                    <template #header>
                        Apartment {{ i }}
                    </template>
                </ApartmentCardSmall>
            </template>
        </CarouselContent>
    </div>

    <!-- Left button -->
    <CarouselScrollButton direction="left" @click="scroll('left')"><</CarouselScrollButton>

    <!-- Right Button -->
    <CarouselScrollButton direction="right" @click="scroll('right')">></CarouselScrollButton>
</div>
</template>

<style scoped>
@reference "@/assets/tailwind.css";

/* hide scrollbar for webkit browsers */
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

/* hide scrollbar for others */
.hide-scrollbar {
    -ms-overflow-style: none;  
    scrollbar-width: none;  
}

/* .card-container {
    @apply p-2 border-4 rounded-2xl text-white shrink-0
         bg-[#169cda] border-[#0f77a7]
         dark:text-white dark:bg-[#0c2f8e] dark:border-[#0a2878] dark:font-bold;
} */
</style>