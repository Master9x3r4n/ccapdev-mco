<script setup>
import CarouselScrollButton from './CarouselScrollButton.vue';
import {ref, onMounted, onUnmounted, nextTick} from 'vue';

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
const scrollStart = ref(true)
const scrollEnd = ref(false)

const scroll = (direction) => {
    const carousel = carouselContent.value;
    if (carousel) {
        const actualItem = carousel.firstElementChild?.firstElementChild;
        if (actualItem) {
            const scrollValue = actualItem.offsetWidth * props.count;

            // Source btw: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
            carousel.scrollBy({
                left: direction === 'left' ? -scrollValue : scrollValue,
                behavior: 'smooth'
            });
        }
    }
};

const updateScroll = () => {
    const carousel = carouselContent.value;
    if (carousel) {
        const actualItem = carousel.firstElementChild?.firstElementChild;
        if (actualItem) {
            // Get the current carousel index
            const currentIndex = Math.round(carousel.scrollLeft / actualItem.offsetWidth);

            // Compute the maximum index that can be reached
            const totalItems = carousel.firstElementChild.children.length;
            const maxIndex = totalItems - props.count;

            // Update scroll refs
            scrollStart.value = currentIndex <= 0;
            scrollEnd.value = currentIndex >= maxIndex;   
        }
    }
}

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

onMounted(() => {
  carouselContent.value?.addEventListener('scroll', updateScroll, {
    passive: true
  })
})

onUnmounted(() => {
  carouselContent.value?.removeEventListener('scroll', updateScroll)
})

</script>

<template>
    <div 
    class = "relative flex justify-center items-center"
    :style="{ width: containerWidth }"> 
        <!-- Carousel Content -->
        <div ref = "carouselContent"
        class = "overflow-x-auto overflow-y-hidden scroll-smooth hide-scrollbar w-full flex snap-x snap-mandatory">
            <!-- Items Container (idk it breaks without this one) -->
            <div class="flex">
                <slot name="content"></slot>
            </div>
        </div>

        <!-- Left button -->
        <CarouselScrollButton direction="left" 
        v-if="!scrollStart"
        :spacing="props.buttonSpacing" :adjust="props.buttonStyling"
        @click="scroll('left')"/>

        <!-- Right Button -->
        <CarouselScrollButton direction="right" 
        v-if="!scrollEnd"
        :spacing="props.buttonSpacing" :adjust="props.buttonStyling"
        @click="scroll('right')" />
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