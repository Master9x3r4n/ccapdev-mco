<script setup>
import Carousel from '@/components/carousel/Carousel.vue';
import ListingInformation from '@/components/listing-content/ListingInformation.vue';
import OverallRating from '@/components/side-cards/OverallRating.vue';
import MediaContainer from '@/components/carousel/MediaContainer.vue';
import ReviewCard from '@/components/review-cards/ReviewCard.vue';
import Divider from '@/components/divider/Divider.vue';
import ReviewDropdown from "@/components/dropdown/ReviewDropdown.vue";


const props = defineProps({
    listingData: {
        type: Object,
        default:{
            name: "Apartment Name",
            address: "Studio apartment - Awesome St., Barangay Big Love, Pasay City",
            description: "This apartment is very nice. It has nice rooms and is placed very nicely. It also has nice neighbors and a lot of other nice things.",
            owner: "Really Cool Apartments",
            amenities: ['2 Bedrooms', '2 Bathrooms', '3 Dining Rooms', '10 Living Rooms'],
            contacts: ['Facebook', 'Instagram'],
            rating: [
                { name: "Cleanliness", rating: 4 },
                { name: "Comfort", rating: 4 },
                { name: "Spaciousness", rating: 3 },
                { name: "Price", rating: 2 }
            ]
        }
    },
    reviewsData: {
        type: Array,
        default: [
            {
                authorData: {
                    name: "chud student 1",
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
    }
})

</script>

<template>
    <div class="flex justify-around gap-8 m-8 ">
        <!-- Main Listing -->
        <div class="flex flex-col gap-4 w-fit flex-grow max-w-screen-lg">
            <!-- Media Carousel -->
            <Carousel :count="1" buttonStyling="large">
                <template #content>
                <template v-for="i in 3">
                    <MediaContainer class="flex shrink-0 snap-start"/>
                </template>
                </template>
            </Carousel>

            <!-- Listing Information -->
            <ListingInformation>
                <template #listing-name>
                    {{ props.listingData.name }}
                </template>
                <template #listing-address>
                    {{ props.listingData.address }}
                </template>
                <template #listing-owner>
                    {{ props.listingData.owner }}
                </template>
                <template #description> 
                    {{ props.listingData.description }}
                </template>
            </ListingInformation> 
        </div>

        <!-- Reviews -->
        <div class="flex flex-col gap-4 w-fit">
            <OverallRating/>

            <!-- Reviews List -->
            <div class="flex flex-col gap-1">
                <div class="flex flex-row justify-between items-center gap-2">
                    <span class="font-bold text-3xl leading-10">Reviews</span>
                  <ReviewDropdown></ReviewDropdown>
                </div>

                <!-- Reviews -->
                <template v-for="i in props.reviewsData">
                    <ReviewCard :reviewData="i">
                        <template #review-title>
                            {{ i.reviewTitle }}
                        </template>
                        <template #review>
                            {{ i.reviewContent }}
                        </template>
                        <template #ownerReply v-if="i.ownerReply">
                            {{ i.ownerReply }}
                        </template>
                    </ReviewCard>
                    <Divider/>
                </template>
            </div>
        </div>
    </div>
</template>