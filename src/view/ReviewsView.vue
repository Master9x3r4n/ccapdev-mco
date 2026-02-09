<script setup>
import Divider from '@/components/divider/Divider.vue';
import FullReviewCard from '@/components/review-cards/FullReviewCard.vue';

import {ref} from 'vue'

const results = ref(3)

</script>

<template>
<div class="flex flex-col justify-around gap-4 m-7 w-fit">
    <!-- Body Header -->
    <div class="w-full flex justify-between items-center px-4.5">
        <!-- Search Result -->
        <div class="font-light font-[20px] italic leading-6">Found {{ results }} reviews...</div>
    </div>

    <!-- Body Content -->
    <div class="h-fit w-full flex flex-col gap-6">
        <template v-for="i in results">
        <div><FullReviewCard/></div>
        <Divider v-if="i != results"/>
        </template>
    </div>
</div>
</template>