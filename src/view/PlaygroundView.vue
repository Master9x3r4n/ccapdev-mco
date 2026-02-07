<script setup>
    import ApartmentCardSmall from '@/components/apartment-cards/ApartmentCardSmall.vue';
    import ApartmentCardLarge from '@/components/apartment-cards/ApartmentCardLarge.vue';
    import Carousel from '@/components/carousel/Carousel.vue';
    import DarkModeButton from '@/components/DarkModeButton.vue';
    import TestContainer from '@/components/test-components/TestContainer.vue';
    import TestLabel from '@/components/test-components/TestLabel.vue';

    import {ref} from 'vue'
import OverallRating from '@/components/side-cards/OverallRating.vue';
import ReviewCard from '@/components/review-cards/ReviewCard.vue';

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

    <!-- Overall Rating -->
    <TestContainer dir="col">
        <TestLabel>Overall Rating Box</TestLabel>
        <OverallRating />
    </TestContainer>

    
    <!-- Review Card Small -->
    <TestContainer dir="col">
        <TestLabel>Review Cards</TestLabel>
        <div class="flex justify-evenly gap-20">
            <ReviewCard ownerReply="."/>
            <ReviewCard />
        </div>
    </TestContainer>
    
    <!-- Review Card Large -->
    <!-- Filter Buttons -->
</template>
