<script setup>
import Divider from '@/components/divider/Divider.vue';
import FullReviewCard from '@/components/review-cards/FullReviewCard.vue';

import {ref} from 'vue'

const props = defineProps({
    reviews: {
        type: Array,
        default:[
        {
            content:{
                title: "Absolute Cinema",
                description: "Never have I ever found an apartment that makes me go \"ABSOLUTE CINEMA\""
            },
            rating: 5.0,
            reviewerProfile: {
                name: "MetaGuelTheta",
                count: 5
            },
        }, 
        {
            content:{
                title: "Laughter is the Best Medicine",
                description: "AHAHAHHHAHAHAHAHHAHAHAHAHAHHAHAHAHAHAHAHAHA"
            },
            rating: 3.5,
            reviewerProfile: {
                name: "Sofialoccocus",
                count: 42
            },
        }, 
        {
            content:{
                title: "Best for playing Gesnsh*t",
                description: "Skibi toilet go kys (keep yourself safe)"
            },
            rating: 1.5,
            reviewerProfile: {
                name: "Sussana Mogus",
                count: 12
            },
        }, 
        ]
    }
})

const results = ref(3)

</script>

<template>
<div class="flex justify-center w-full">
    <div class="flex flex-col justify-around gap-4 m-7 w-fit">
        <!-- Body Header -->
        <div class="w-full flex justify-between items-center px-4.5">
            <!-- Search Result -->
            <div class="font-light text-[20px] italic leading-6">
                Found {{ props.reviews.length }} review<template v-if="props.reviews.length != 1">s</template>...
            </div>
        </div>

        <!-- Body Content -->
        <div class="h-fit w-full flex flex-col gap-6">
            <template v-for="(i, index) in props.reviews">
            <div>
                <FullReviewCard :rating="i.rating" :reviewer="i.reviewerProfile">
                    <template #review-title>{{i.content.title}}</template>
                    <template #review-content>{{i.content.description}}</template>
                </FullReviewCard>
            </div>
            <Divider v-if="index != props.reviews.length -1"/>
            </template>
        </div>
    </div>
</div>
</template>