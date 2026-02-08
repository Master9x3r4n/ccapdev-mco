<script setup>
import CarouselScrollButton from './CarouselScrollButton.vue';
import {ref, onMounted, nextTick} from 'vue';

const props = defineProps({
    count: {
        type: Number,
        default: 1
    },
    buttonSpacing: {
        type: Number,
        default: 6
    },
    buttonStyling: {
        type: String,
        default: "small circular"
    }
});

const containerWidth = ref('420px');
const carouselContent = ref();

const scroll = (direction) => {
    const carousel = carouselContent.value;
    if (carousel) {
        const actualItem = carousel.firstElementChild?.firstElementChild;
        if (actualItem) {
            const scrollValue = actualItem.offsetWidth * props.count;

            carousel.scrollBy({
                left: direction === 'left' ? -scrollValue : scrollValue,
                behavior: 'smooth'
            });
        }

        // Source btw: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy

    }
};

// NOTE TO SELF: DOCUMENT THIS AS CLAUDE CODE (docuymentation here is based on non-ai research and self learning)
onMounted(() => {
    // Delay to wait for DOM to fully render first
    nextTick(() => {
        const carousel = carouselContent.value;

        // Same logic accessing as scrolling
        if (carousel) {
            const actualItem = carousel.firstElementChild?.firstElementChild;

            if (actualItem) {
                const itemWidth = actualItem.offsetWidth;
                containerWidth.value = `${itemWidth * (props.count)}px`; //Compute the new width
            }
        }
    });
});

</script>

<template>
    <div 
    class = "relative flex justify-center items-center"
    :style="{ width: containerWidth }"> 
    <!--  -->
        <div ref = "carouselContent"
        class = "overflow-x-auto overflow-y-hidden scroll-smooth hide-scrollbar w-full flex snap-x snap-mandatory">
            <div class="flex">
                <slot name="content"></slot>
            </div>

        </div>

        <!-- Left button -->
        <CarouselScrollButton 
        direction="left" 
        :spacing="props.buttonSpacing"
        :adjust="props.buttonStyling"
        @click="scroll('left')">
            <
        </CarouselScrollButton>

        <!-- Right Button -->
        <CarouselScrollButton 
        direction="right" 
        :spacing="props.buttonSpacing"
        :adjust="props.buttonStyling"
        @click="scroll('right')">
            >
        </CarouselScrollButton>
    </div>
</template>

<style scoped>
/* hide scrollbar for webkit browsers */
.hide-scrollbar::-webkit-scrollbar {
    display: none;
}

/* hide scrollbar for others */
.hide-scrollbar {
    -ms-overflow-style: none;  
    scrollbar-width: none;  
}

</style>