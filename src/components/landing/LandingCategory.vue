<script setup>
import ApartmentCardSmall from '../apartment-cards/ApartmentCardSmall.vue';
import Carousel from '../carousel/Carousel.vue';
import FilterButton from '../page-buttons/FilterButton.vue';

import {ref} from 'vue'

const props = defineProps({
    filterItems: {
        type: Array,
        default: ['De La Salle University', 'University of Coolness']
    }
})

const selectedItems = ref([])

</script>

<template>
<div class="h-fit flex flex-col w-full gap-3">
    <!-- Text -->
    <div class="italic text-[20px] leading-6 font-normal py-2">
        <slot name="text">Find homes near your university</slot>
    </div>

    <!-- Filters -->
    <div class="flex items-center justify-start gap-3 overflow-x-scroll pb-2">
        <template v-for="i in props.filterItems">
            <FilterButton v-model="selectedItems" :value="i">{{ i }}</FilterButton>
        </template>
    </div>

    <!-- Carousel Container-->
    <div class="h-fit w-full flex justify-start">
        <Carousel :count="2"  buttonStyling="small circular" :buttonSpacing="1">
            <template #content>
            <template v-for="i in 5">
                <div class="px-3 flex shrink-0 snap-start">
                <ApartmentCardSmall
                :ratingData="{rating: 5 - i + 0.5, reviewCount: (i)* 6}">
                    <template #header>
                        Apartment {{ i }}
                    </template>
                </ApartmentCardSmall>
                </div>
            </template>
            </template>
        </Carousel>
    </div>
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