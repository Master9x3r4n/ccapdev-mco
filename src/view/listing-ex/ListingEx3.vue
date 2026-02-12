
<script setup>
import ListingView from '../ListingView.vue';


const listingData = {
    name: "Miro's House",
    address: "Taft Avenue, De La Salle University",
    description: "Freshly doxxed, Miro's house is a beautiful home that features Miro.",
    owner: "Jan Miro Quilantang",
    amenities: ['1 Miro', '3 Bedrooms', '2 Bathrooms'],
    contacts: ['Discord', 'Tiktok idk', 'Github'],
    rating: [
        { name: "Cleanliness", rating: 2 },
        { name: "Comfort", rating: 5 },
        { name: "Spaciousness", rating: 1 },
        { name: "Price", rating: 1 }
    ]
}

const reviewsData = [
    {
        authorData: {
            name: "Jordan Lee",
            reviewCount: 2
        },
        rating: 2,
        reviewTitle: "Cool ig",
        reviewContent: "Honestly, not too bad, but just very mid. giving it 2 stars instead of 3 cause I didn't get to see Miro.",
        reply: "",
        score: 7
    },
    {
        authorData: {
            name: "Casey Cruz",
            reviewCount: 3
        },
        rating: 1,
        reviewTitle: "Very very meh",
        reviewContent: "Miro wasn't even there and the apartment doesn't match what was advertised. It is driving me insane.",
        ownerReply: "",
        score: 5
    }
]

</script>

<template>
    <ListingView :listingData="listingData" :reviewsData="reviewsData"/>
</template>