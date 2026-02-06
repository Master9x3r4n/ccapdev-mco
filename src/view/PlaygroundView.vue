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
            <div class="h-[50%] flex justify-end items-end">
                <div class="w-[85%] h-[50%] flex">
                    <!-- Review Overall -->
                    <div class="flex flex-col h-full shrink-0 text-right justify-center">
                        <h1 class="font-normal text-[20px] leading-5">
                            4.0
                        </h1>
                        <p class="italic font-normal text-[12px] leading-4">
                            From 32 reviews
                        </p>
                    </div>

                    <!-- Review Stars -->
                    <div class="flex h-full grow-4 justify-evenly items-center pt-auto pb-auto">
                        <template v-for="i in 5">
                            <div>
                                <span class="text-2xl">⭐</span>
                            </div>
                        </template>
                    </div>
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
