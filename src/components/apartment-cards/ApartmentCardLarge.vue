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
    <!-- 3x W 0.8x H -->
    <div class=
    "h-86 w-304 rounded-[25px] 
    p-0 shadow-2xl relative
    bg-white flex flex-row items-center dark:bg-[#111111]">
        <!-- Photo h-40%-->
        <div class=
        "h-full w-5/12 rounded-l-[25px] 
        absolute left-0 bottom-0 top-0
        bg-gradient"></div>

        <!-- Frame -->
       <div class=" absolute right-8 w-[36%] h-[80%] flex flex-col">
            <!-- Upper Container -->
            <div class="flex flex-col justify-end text-right gap-6 grow">
                <!-- Apartment Name -->
                <div>
                    <h1 class="font-bold text-[32px] leading-10 dark:text-white">
                        <slot name="header">
                            Apartment Name
                        </slot>
                    </h1>
                </div>

                <!-- Apartment Description -->
                <div class="h-[60%]">
                    <p class="italic font-normal text-[20px] leading-6 dark:text-white">
                        <slot name="description">
                            This apartment is very nice. It has 
                            nice rooms and is placed very nicely.
                            It also has nice neighbors and a lot
                            of other nice things.
                        </slot>
                    </p>
                </div>
            </div>

            <!-- Flairs Container -->
            <div class="h-[20%] flex justify-end items-center gap-3 pr-1">
                <!-- Apartment Flairs -->
                <template v-for="i in 2">
                    <div class="bg-[#355AFF] p-2.5 rounded-4xl text-white 
                    flex items-center justify-cente h-10">
                        ❄️
                        Air Conditioning
                    </div>
                </template>
                <div class="bg-[#355AFF] p-2.5 rounded-[50%] text-white 
                flex items-center justify-center h-10 w-10">
                    +3
                </div>
            </div>

            <!-- Lower Review Container -->
            <div class="h-[20%] flex justify-end items-center">
                <CardRating 
                :rating="ratingData['rating']" 
                :reviewCount="ratingData['reviewCount']"/>
            </div>
       </div>
    </div>
</template>



<style scoped>

.bg-gradient {
    background: linear-gradient(99.9deg, #517FFF 1.35%, #312AFF 99.48%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

</style>
