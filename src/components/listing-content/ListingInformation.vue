<script setup>
import MediaContainer from '../carousel/MediaContainer.vue';

</script>

<template>
<div class="flex flex-col justify-around items-center gap-4">
    <!-- Listing Information -->
    <div class="divider"></div>
    <!-- Apartment Header -->
    <div class="border w-full flex flex-col gap-6">
        <!-- Profile -->
        <div class="border flex flex-col">
            <div class="font-bold text-3xl leading-10 flex items-center">
                Apartment Name
            </div>
            <div class="italic flex items-center">
                Studio apartment - Awesome St., Barangay Big Love, Pasay City
            </div>
        </div>

        <!-- Profile -->
        <div class="border flex gap-3">
            <div class="w-13 h-13 rounded-[50%] bg-amber-100 bg-gradient"></div>
            <div>
                <div class="font-medium text-[20px] leading-6">Really Cool Apartments</div>
                <div class="font-normal leading-5 italic text-[#355AFF]">✅ Verified</div>
            </div>
        </div>
    </div>

    <!-- Listing Description -->
    <div class="divider"></div>
    <div class="border leading-5 flex center italic w-full">
        This apartment is very nice. It has nice rooms and is placed very nicely.
        <br><br>
        It also has nice neighbors and a lot of other nice things.
    </div>

    <!-- Amenities -->
    <div class="divider"></div>
    <div class="border flex flex-col h-54 w-full">
        <div class="sub-heading">Amenities</div>
        <ul class="flex flex-col flex-wrap gap-4 h-[80%] border">
            <li v-for="i in 8">
                ℹ️ Faceboook or whatever
            </li>
        </ul>
    </div>

    <!-- Location -->
    <div class="divider"></div>
    <div class="border w-full">
        <div class="sub-heading">Location</div>
        <MediaContainer size="wide"/>
    </div>

    <!-- Contact -->
    <div class="divider"></div>
    <div class="border w-full">
        <div class="sub-heading">Contact</div>
        <div class="border">
            <ul class="flex flex-col gap-4">
                <li v-for="i in 3">
                    ℹ️ Faceboook or whatever
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<style scoped>
@reference "tailwindcss";

.sub-heading {
    @apply font-semibold text-[24px] leading-8 mb-5
}

.divider {
    @apply border-2 border-[#C5C5C5] w-full m-2
}

</style>