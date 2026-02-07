<script setup>
    import ApartmentCardSmall from '@/components/apartment-cards/ApartmentCardSmall.vue';
    import ApartmentCardLarge from '@/components/apartment-cards/ApartmentCardLarge.vue';
    import Carousel from '@/components/carousel/Carousel.vue';
    import DarkModeButton from '@/components/DarkModeButton.vue';
    import TestContainer from '@/components/test-components/TestContainer.vue';
    import TestLabel from '@/components/test-components/TestLabel.vue';

    import {ref} from 'vue'

    const items=ref([1, 2, 3, 4, 5])
</script>

<template>
    <!-- Dark Mode Button -->
    <TestContainer dir="row">
        <TestLabel>Theme</TestLabel>
        <DarkModeButton />
    </TestContainer>

    <!-- Small Card -->
    <TestContainer dir="col">
        <TestLabel>Small Card</TestLabel>
        <ApartmentCardSmall />
    </TestContainer>

    <!-- Large Card -->
     <TestContainer dir="col">
        <TestLabel>Large Card</TestLabel>
        <template v-for="i in 2">
            <ApartmentCardLarge 
                :ratingData="{rating: 1.5 * (4-i), reviewCount: 69}"
                class="m-1.5">
                <template #header>Apartment {{ i }}</template>
            </ApartmentCardLarge>
        </template>
    </TestContainer>

    <!-- Carousel -->
    <TestContainer dir="col">
        <TestLabel>Carousel</TestLabel>
        <Carousel :items="items"/>
    </TestContainer>
</template>
