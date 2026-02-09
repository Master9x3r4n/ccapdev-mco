<script setup>
import ApartmentCardLarge from '@/components/apartment-cards/ApartmentCardLarge.vue';

</script>

<template>
<div class="flex flex-col justify-around gap-8 m-7 w-fit">
    <!-- Body Header -->
    <div class="w-full flex justify-between items-center px-2">
        <!-- Search Result -->
        <div class="font-light font-[20px] italic leading-6">Found 2 results for “beautiful apartment”</div>

        <!-- Filter Button -->
        <div class="flex justify-center items-center py-1 px-3.75 border-2 rounded-[40px]
        leading-5 text-[#355AFF] border-[#355AFF]">
            ⏬ Filter
        </div>
    </div>

    <!-- Body Content -->
    <div class="h-fit w-full flex flex-col gap-8">
        <template v-for="i in 2">
        <div><ApartmentCardLarge/></div>
        </template>
    </div>
</div>
</template>