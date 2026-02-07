<script setup>
const props = defineProps({
    hasReply: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <div class="flex flex-col justify-center items-center 
    p-10 gap-3.75 w-105.25 h-120 border-3 rounded-3xl
    border-[#BFBFBF] bg-white">
        <!-- Header Container -->
        <div class="w-full flex justify-between items-center">
            <div class="flex gap-3 items-center">
                <!-- Profile -->
                <div class="w-13 h-13 rounded-[50%] bg-amber-100 bg-gradient"></div>

                <!-- Name -->
                <div>
                    <div class="font-medium text-[20px] leading-6">chud student</div>
                    <div class="font-normal leading-5 italic">67 Reviews</div>
                </div>
            </div>

            <!-- Rating -->
            <div class="flex justify-between items-center w-3/12">
                <img src="@\assets\rating-assets\star-full.svg" width="28px">
                <div class="font-bold text-3xl leading-10">4.0</div>
            </div>
        </div>

        <!-- Title Container -->
        <div class="w-full h-[14%] flex items-center font-bold leading-8 text-2xl">
            Title of Review
        </div>

        <!-- Comment Container -->
        <div class="h-[56%] flex flex-col">
            <!-- Review Container -->
            <div class="w-full text-[16px] leading-6 grow">
                I have stayed at this apartment for a while, and let me say, it is as the name says. 
                It's a really cool apartment and it has a lot of the amenities 
                that a student would want from...
            </div>

            <template v-if="props.hasReply">
                <!-- Reply Container -->
                <div class="w-full h-[50%] mt-3">
                    <div class="bg-[#D9D9D9] h-full rounded-3xl 
                    flex flex-col justify-center items-center p-5 gap-1.25">
                        <div class="italic text-left w-full text-[14px] leading-6">
                            Reply from the owner
                        </div>
                        <div class="w-full text-[16px] leading-6">
                            Glad to hear that you were satisfied with our space! ^_^
                        </div>
                    </div>
                </div>
            </template>
        </div>

        <!-- Footer Container -->
        <div class="border w-full h-[10%] flex justify-between items-center">
            <!-- Show More -->
            <div class="font-semibold underline text-[16px] leading-6">
                Show More
            </div>

            <!-- Upvote -->
            <div class="italic font-normal text-[16px] leading-6 flex">
                👍 -67 👎
            </div>
        </div>

    </div>
</template>

<style scoped>

.bg-gradient {
    background: linear-gradient(99.9deg, #74b2fd 1.35%, #517FFF 99.48%);
}

</style>