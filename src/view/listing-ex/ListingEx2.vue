
<script setup>
import ListingView from '../ListingView.vue';


const listingData = {
    name: "The Baxter Suite",
    address: "44 Yancy St., New York City, Earth-616",
    description: "A very grand, beautiful, and luxurious Inspired by the heroes of the Fantastic Four, this beautiful deluxe suite features 4 bedrooms and a visit from Galactus. It's Fantastic. that features multiple rooms and doors. A must stay for the holidays.",
    owner: "The Future Foundation",
    amenities: ['4 Bedrooms', 'Dining Room', 'Giant Lab', 'Space Portal'],
    contacts: ['Twitter', 'Facebook'],
    rating: [
        { name: "Cleanliness", rating: 4 },
        { name: "Comfort", rating: 4 },
        { name: "Spaciousness", rating: 4 },
        { name: "Price", rating: 4 }
    ],
}

const reviewsData = [
    {
        authorData: {
            name: "Casey Cruz",
            reviewCount: 2
        },
        rating: 4,
        reviewTitle: "Fantastic For Us",
        reviewContent: "I have stayed at this apartment for a while, and let me say, it is as the name says. It's a really cool apartment and it has a lot of the amenities that a student would want from...",
        reply: "Glad to hear that you were satisfied with our space! ^_^",
        score: 44,
        reviewsRoute: "/reviews2",
    },
    {
        authorData: {
            name: "Taylor Morgan", 
            reviewCount: 1
        },
        rating: 4,
        reviewTitle: "I Love it!",
        reviewContent: "Easy 4 stars 4 me. I even got to meet the Human Torch! Fantastic!",
        ownerReply: "Happy to hear that!",
        score: 44,
        reviewsRoute: "/reviews2",
    }
]

</script>

<template>
    <ListingView :listingData="listingData" :reviewsData="reviewsData"/>
</template>