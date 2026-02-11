<script setup>
import CarouselScrollButton from './CarouselScrollButton.vue';
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const props = defineProps({
  count: {
    type: Number,
    default: 3 // Default to showing 3 cards
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

const carouselContent = ref(null);
const carouselContainer = ref(null);
const scrollStart = ref(true);
const scrollEnd = ref(false);
const containerMaxWidth = ref('100%'); // Starts full width, gets constrained by JS

// 1. Calculate the container size limit
const updateDimensions = () => {
  const carousel = carouselContent.value;
  if (!carousel) return;

  // Grab the first actual card inside the slot
  const firstItem = carousel.querySelector('.carousel-item') || carousel.firstElementChild?.children[0];

  if (firstItem) {
    const itemWidth = firstItem.offsetWidth;
    // Constrain the width to (Card Width * Count)
    // But CSS 'w-full' ensures it never exceeds the screen size.
    containerMaxWidth.value = `${itemWidth * props.count}px`;

    updateScrollButtons();
  }
};

// 2. Scroll Logic
const scroll = (direction) => {
  const carousel = carouselContent.value;
  if (!carousel) return;

  const scrollAmount = carousel.clientWidth; // Scroll one full "page" of view

  carousel.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth'
  });
};

// 3. Update Button Visibility
const updateScrollButtons = () => {
  const carousel = carouselContent.value;
  if (!carousel) return;

  // 10px buffer for calculation safety
  scrollStart.value = carousel.scrollLeft <= 10;
  scrollEnd.value = Math.ceil(carousel.scrollLeft + carousel.clientWidth) >= carousel.scrollWidth - 10;
}

onMounted(() => {
  const carousel = carouselContent.value;

  // Wait for DOM to render items
  nextTick(() => {
    updateDimensions();
    // Recalculate if window resizes (handles zoom/rotation)
    window.addEventListener('resize', updateDimensions);
  });

  if (carousel) {
    carousel.addEventListener('scroll', updateScrollButtons, { passive: true });
  }
});

onUnmounted(() => {
  const carousel = carouselContent.value;
  if (carousel) {
    carousel.removeEventListener('scroll', updateScrollButtons);
  }
  window.removeEventListener('resize', updateDimensions);
});
</script>

<template>
  <div class="flex w-full">

    <div ref="carouselContainer"
         class="relative w-full transition-[max-width] duration-300 ease-out group"
         :style="{ maxWidth: containerMaxWidth }">

      <div ref="carouselContent"
           class="overflow-x-auto overflow-y-hidden scroll-smooth hide-scrollbar flex snap-x snap-mandatory w-full">

        <div class="flex w-max">
          <slot name="content"></slot>
        </div>
      </div>

      <div v-show="!scrollStart"
           class="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <CarouselScrollButton
            direction="left"
            :spacing="props.buttonSpacing"
            :adjust="props.buttonStyling"
            @click="scroll('left')"
        />
      </div>

      <div v-show="!scrollEnd"
           class="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <CarouselScrollButton
            direction="right"
            :spacing="props.buttonSpacing"
            :adjust="props.buttonStyling"
            @click="scroll('right')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Force Items to keep its original width */
:deep(.flex > *) {
  flex-shrink: 0;
  scroll-snap-align: start;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>