<script setup>
import ReviewsView from '../ReviewsView.vue';

const reviews = [
    {
        content:{
            title: 'Le Grand Apartment',
            description: "One of my favorite places ever. I am glad that i decided to visit this place.",
            reply: "Glad to hear that you were satisfied with our space! ^_^",
        },
        rating: 4.5,
        score: 67,
        reviewerProfile: {
            name: "Casey Cruz",
            count: 2
        },
    },
    {
        reviewerProfile: {
            name: "Jordan Lee",
            count: 2
        },
        rating: 5,
        score: 52,
        content: {
            title: "My review",
            description: "Absolutely Grand! That is all I have to say for this wonderful place.",
            reply: "",
        },
        
    }
]

</script>

<template>
    <ReviewsView :reviews="reviews"/>
</template>