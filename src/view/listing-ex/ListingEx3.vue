
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
    ],
    imageSrc: "https://static.wikitide.net/peppafanonwiki/thumb/e/ee/Peppa%27s_house_updated.webp/800px-Peppa%27s_house_updated.webp.png",
}

const reviewsData = [
    {
        authorData: {
            name: "Jordan Lee",
            reviewCount: 2,
            imageSrc: "https://i.pinimg.com/1200x/40/71/e3/4071e33ef6d3d34178fac2a3e11e358b.jpg",
            profileRoute: "/profile3",
        },
        rating: 2,
        reviewTitle: "Cool ig",
        reviewContent: "Honestly, not too bad, but just very mid. giving it 2 stars instead of 3 cause I didn't get to see Miro.",
        reply: "", 
        score: 7,
        reviewsRoute: "/reviews3",
    },
    {
        authorData: {
            name: "Casey Cruz",
            reviewCount: 3,
            imageSrc: "https://i.pinimg.com/736x/07/ad/21/07ad218a0a5df57b1cf0458c7febd2e3.jpg",
            profileRoute: "/profile1",
        },
        rating: 1,
        reviewTitle: "Very very meh",
        reviewContent: "Miro wasn't even there and the apartment doesn't match what was advertised. It is driving me insane.",
        ownerReply: "",
        score: 5,
        reviewsRoute: "/reviews3",
    }
]

</script>

<template>
    <ListingView :listingData="listingData" :reviewsData="reviewsData"/>
</template>