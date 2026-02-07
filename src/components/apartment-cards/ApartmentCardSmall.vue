<script setup>
import CardRating from '@/components/rating/CardRating.vue';  

const props = defineProps({
    ratingData: {
        default: {
            rating: 4,
            reviewCount: 32
        }
    }
})

</script>

<template>
    <div class=
    "h-104.75 w-110 rounded-[25px] 
    p-0 shadow-2xl relative
    bg-white flex flex-col items-center">
    <!-- Photo h-40%-->
        <div class=
        "w-full h-5/12 rounded-t-[25px] 
        absolute left-0 right-0 top-0
        bg-gradient"></div>

        <!-- Frame -->
       <div class="
       absolute
       top-[45%] w-[90%] h-[50%]
       ">
            <!-- Upper Container -->
            <div class="h-[50%] flex flex-col justify-between">
                <!-- Apartment Name -->
                <div>
                    <h1 class="font-bold text-[32px] leading-10">
                        <slot name="header">Apartment Name</slot>
                    </h1>
                </div>

                <!-- Apartment Description -->
                <div>
                    <p class="italic font-normal text-[20px] leading-6">
                        <slot name="description">
                            This apartment is very nice. It has very nice rooms and is placed very nicely.
                        </slot>
                    </p>
                </div>
            </div>

            <CardRating 
            :rating="ratingData['rating']" 
            :reviewCount="ratingData['reviewCount']"/>
       </div>
    </div>
</template>



<style scoped>

.bg-gradient {
    background: linear-gradient(99.9deg, #517FFF 1.35%, #312AFF 99.48%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

</style>
