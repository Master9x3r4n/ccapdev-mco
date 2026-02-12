<script setup>
import ReviewsView from '../ReviewsView.vue';

const reviews = [
    {
        content:{
            title: "Fantastic For Us",
            description: "I have stayed at this apartment for a while, and let me say, it is as the name says. It's a really cool apartment and it has a lot of the amenities that a student would want from...",
            reply: "Glad to hear that you were satisfied with our space! ^_^",
        },
        rating: 4,
        score: 44,
        reviewerProfile: {
            name: "Casey Cruz",
            count: 2
        },
    },
    {
        reviewerProfile: {
            name: "Taylor Morgan",
            reviewCount: 1
        },
        rating: 4,
        score: 44,
        content: {
            title: "I Love it!",
            description: "Easy 4 stars 4 me. I even got to meet the Human Torch! Fantastic!",
            reply: "Happy to hear that!",
        } 
    }
]

</script>

<template>
    <ReviewsView :reviews="reviews"/>
</template>