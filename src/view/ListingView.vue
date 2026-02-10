<script setup>
import Carousel from '@/components/carousel/Carousel.vue';
import ListingInformation from '@/components/listing-content/ListingInformation.vue';
import OverallRating from '@/components/side-cards/OverallRating.vue';
import MediaContainer from '@/components/carousel/MediaContainer.vue';
import ReviewCard from '@/components/review-cards/ReviewCard.vue';
import Divider from '@/components/divider/Divider.vue';


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
                <template #description>
                    This apartment is very nice. It has nice rooms and is placed very nicely.
                    <br><br>
                    It also has nice neighbors and a lot of other nice things.
                </template>
            </ListingInformation>
        </div>

        <!-- Reviews -->
        <div class="flex flex-col gap-4 w-fit">
            <OverallRating/>

            <!-- Reviews List -->
            <div class="flex flex-col gap-1">
                <div class="font-bold text-3xl leading-10">
                    Reviews
                </div>

                <!-- Reviews -->
                <ReviewCard>
                    <template #ownerReply>
                        Glad to hear that you were satisfied with our space! ^_^
                    </template>
                </ReviewCard>
                <Divider/>
                <ReviewCard>
                    <template #ownerReply>
                        Glad to hear that you were satisfied with our space! ^_^
                    </template>
                </ReviewCard>
            </div>
        </div>
    </div>
</template>