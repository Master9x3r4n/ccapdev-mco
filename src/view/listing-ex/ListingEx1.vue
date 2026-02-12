
<script setup>
import ListingView from '../ListingView.vue';


const listingData = {
    name: "Grand Apartment",
    address: "44 Yancy St., New York City, Earth-616",
    description: "A very grand, beautiful, and luxurious apartment that features multiple rooms and doors. A must stay for the holidays.",
    owner: "The Daily Bugle",
    amenities: ['2 Bedrooms', '1 Bathroom', 'Air Conditioning'],
    contacts: ['The Daily Bugle', 'Facebook', 'Twitter'],
    rating: [
        { name: "Cleanliness", rating: 4 },
        { name: "Comfort", rating: 4 },
        { name: "Spaciousness", rating: 3 },
        { name: "Price", rating: 2 }
    ]
}

const reviewsData = [
    {
        authorData: {
            name: "Peter Parker",
            reviewCount: 67
        },
        rating: 4,
        reviewTitle: "Review Name 1",
        reviewContent: "I have stayed at this apartment for a while, and let me say, it is as the name says. It's a really cool apartment and it has a lot of the amenities that a student would want from...",
        reply: "Glad to hear that you were satisfied with our space! ^_^",
        score: 67
    },
    {
        authorData: {
            name: "chud student 2",
            reviewCount: 67
        },
        rating: 4,
        reviewTitle: "Review Name 2",
        reviewContent: "I have stayed at this apartment for a while, and let me say, it is as the name says. It's a really cool apartment and it has a lot of the amenities that a student would want from...",
        ownerReply: "Glad to hear that you were satisfied with our space! ^_^",
        score: 52
    }
]

</script>

<template>
    <ListingView :listingData="listingData" :reviewsData="reviewsData"/>
</template>