<script setup>
    import ApartmentCardSmall from '@/components/apartment-cards/ApartmentCardSmall.vue';
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
        <TestLabel>Theme</TestLabel>
        <DarkModeButton />
    </TestContainer>

    <!-- Small Card -->
    <TestContainer dir="col">
        <TestLabel>Sample Card</TestLabel>
        <ApartmentCardSmall>
            <!-- Upper Container -->
            <div class="h-[50%] flex flex-col justify-between">
                <!-- Apartment Name -->
                <div>
                    <h1 class="font-bold text-[32px] leading-10">
                        Apartment Name</h1>
                </div>

                <!-- Apartment Description -->
                 <div>
                    <p class="italic font-normal text-[20px] leading-6">
                        This apartment is very nice. It has very nice rooms and is placed very nicely.</p>
                 </div>
            </div>

            <!-- Lower Review Container -->
            <div>
                <div>
                    
                </div>
            </div>
        </ApartmentCardSmall>
    </TestContainer>

    <!-- Carousel -->
    <TestContainer dir="col">
        <TestLabel>Carousel</TestLabel>
        <Carousel :items="items"/>
    </TestContainer>
</template>
