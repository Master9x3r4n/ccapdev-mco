<script setup>
import Carousel from '@/components/carousel/Carousel.vue';
import DarkModeButton from '@/components/DarkModeButton.vue';

import {ref} from 'vue'

const items = ref([1, 2, 3, 4, 5])

</script>

<template>
    <!-- Dark Mode Button -->
    <div class="test-container">
        <span class = "text-container-1"> Theme </span>
        <DarkModeButton />
    </div>

    <!-- Carousel -->
    <div class="test-container flex-col">
        <span class = "text-container-1"> Sample Card </span>
        <div class = "text-container-1 h-32 w-64 flex justify-center">
            Hello World!
        </div>
    </div>

    <div class="test-container flex-col">
        <span class = "text-container-1"> Carousel </span>

        <Carousel :items="items"/>
    </div>

</template>

<style scoped>
    @reference "@/assets/tailwind.css";

    .test-container {
        @apply p-4 flex justify-center items-center border-b-4 bg-white 
        dark:bg-[#656565] dark:border-[#494949];
    }

    .text-container-1 {
        @apply m-1 p-2 border-4 rounded-2xl text-white
        bg-[#169cda] border-[#0f77a7]
        dark:text-white dark:bg-[#0c2f8e] dark:border-[#0a2878] dark:font-bold;
    }
</style>