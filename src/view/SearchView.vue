<script setup>
import ApartmentCardLarge from '@/components/apartment-cards/ApartmentCardLarge.vue';

const props = defineProps({
    searchQuery: {
        type: String,
        default: "beautiful apartment"
    },
    searchResults: {
        type: Array,
        default: [
        {
            name: "Grand Apartment", 
            description: "A very grand, beautiful, and luxurious apartment that features multiple rooms and doors. A must stay for the holidays.",
            ratingData: {
                rating: 4.5,
                reviewCount: 124,
            }
        },
        {
            name: "The Baxter Suite",
            description: "Inspired by the heroes of the Fantastic Four, this beautiful deluxe suite features 4 bedrooms and a visit from Galactus. It's Fantastic.",
            ratingData: {
                rating: 4,
                reviewCount: 44,
            }
        },
        {
            name: "Miro's House",
            description: "Freshly doxxed, Miro's house is a beautiful home that features Miro.",
            ratingData: {
                rating: 3.5,
                reviewCount: 67,
            }
        },
        {
            name: "Yuchengco 404",
            description: "The room where it all happened or maybe its just a reference to the error 404. Perfect for valentines day. (privacy not guaranteed)",
            ratingData: {
                rating: 0.5,
                reviewCount: 69,
            }
        },
        {
            name: "Andrew 702",
            description: "Im cooked for stalgcm",
            ratingData: {
                rating: 0,
                reviewCount: 1,
            }
        },
        ]
    }
})

</script>

<template>
<div class="flex justify-center w-full">
    <div class="flex flex-col justify-around gap-8 m-7 w-fit">
        <!-- Body Header -->
        <div class="w-full flex justify-between items-center px-2">
            <!-- Search Result -->
            <div class="font-light text-[20px] italic leading-6 dark:text-white">Found {{ props.searchResults.length }} results for “{{ props.searchQuery }}”</div>

            <!-- Filter Button -->
            <div class="flex justify-center items-center py-1 px-3.75 border-2 rounded-[40px]
            leading-5 text-[#355AFF] border-[#355AFF]">
                ⏬ Filter
            </div>
        </div>

        <!-- Body Content -->
        <div class="h-fit w-full flex flex-col gap-8">
            <template v-for="i in props.searchResults">
            <div>
            <ApartmentCardLarge :ratingData="i.ratingData">
                <template #header>
                    {{ i.name }}
                </template>
                <template #description>
                    {{ i.description }}
                </template>
            </ApartmentCardLarge>
            </div>
            </template>
        </div>
    </div>
</div>
</template>