<script setup>
import ReviewsView from '../ReviewsView.vue';

const reviews = [
    {
        reviewerProfile: {
            name: "Jordan Lee",
            count: 2
        },
        rating: 2,
        score: 7,
        content:{
            title: "Cool ig",
            description: "Honestly, not too bad, but just very mid. giving it 2 stars instead of 3 cause I didn't get to see Miro.",
            reply: "",
        }
        
    },
    {
        reviewerProfile: {
            name: "Casey Cruz",
            vount: 3
        },
        rating: 1,
        score: 5,
        content: {
            title: "Very very meh",
            description: "Miro wasn't even there and the apartment doesn't match what was advertised. It is driving me insane.",
            reply: "",
        }
        
    }
]

</script>

<template> 
    <ReviewsView :reviews="reviews"/>
</template>