<script setup>
    import Carousel from '@/components/carousel/Carousel.vue';
    import DarkModeButton from '@/components/DarkModeButton.vue';
    import TestContainer from '@/components/test-components/TestContainer.vue';
    import TestLabel from '@/components/test-components/TestLabel.vue';
    import {ref} from 'vue'
    const items = ref([1, 2, 3, 4, 5])
</script>

<template>
    <!-- Dark Mode Button -->
     <TestContainer>
        <TestLabel> Theme </TestLabel>
        <DarkModeButton />
     </TestContainer>

    <!-- Carousel -->
     <TestContainer dir="col">
        <TestLabel> Sample Card </TestLabel>
        <div class = "m-1 p-2 border-4 rounded-2xl text-white
        bg-[#169cda] border-[#0f77a7]
        dark:text-white dark:bg-[#0c2f8e] dark:border-[#0a2878] dark:font-bold 
        h-32 w-64 flex justify-center">
            Hello World!
        </div>
     </TestContainer>

    <TestContainer dir="col">
        <TestLabel> Carousel </TestLabel>
        <Carousel :items="items"/>
    </TestContainer>
</template>
