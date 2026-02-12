
<script setup>
import ListingView from '../ListingView.vue';


const listingData = {
    name: "Grand Apartment",
    address: "Blk 12 Lt 32 Somebody st., Las Pinas City",
    description: "A very grand, beautiful, and luxurious apartment that features multiple rooms and doors. A must stay for the holidays.",
    owner: "The Daily Bugle",
    amenities: ['2 Bedrooms', '1 Bathroom', 'Air Conditioning'],
    contacts: ['The Daily Bugle', 'Facebook', 'Twitter'],
    rating: [
        { name: "Cleanliness", rating: 4 },
        { name: "Comfort", rating: 4 },
        { name: "Spaciousness", rating: 3 },
        { name: "Price", rating: 2 }
    ],
    imageSrc: "https://youre.outof.games/media/uploads/cb/da/cbda1bb4-ee0d-4c65-989f-05a24edd22cf/daily-bugle-featured-location.jpg",
}

const reviewsData = [
    {
        authorData: {
            name: "Casey Cruz",
            reviewCount: 2,
            imageSrc: "https://i.pinimg.com/736x/07/ad/21/07ad218a0a5df57b1cf0458c7febd2e3.jpg",
        },
        rating: 4.5, 
        reviewTitle: 'Le Grand Apartment',
        reviewContent: "One of my favorite places ever. I am glad that i decided to visit this place.",
        reply: "Glad to hear that you were satisfied with our space! ^_^",
        score: 67,
        reviewsRoute: "/reviews1",
    },
    {
        authorData: { 
            name: "Jordan Lee",
            reviewCount: 2,
            imageSrc: "https://i.pinimg.com/1200x/40/71/e3/4071e33ef6d3d34178fac2a3e11e358b.jpg",
        },
        rating: 5,
        reviewTitle: "My review",
        reviewContent: "Absolutely Grand! That is all I have to say for this wonderful place.",
        ownerReply: "",
        score: 52,
        reviewsRoute: "/reviews1",
    }
]

</script>

<template>
    <ListingView :listingData="listingData" :reviewsData="reviewsData"/>
</template>