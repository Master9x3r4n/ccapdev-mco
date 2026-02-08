<script setup>

</script>

<template>
    <!-- 1120 x 769 -->
    <div class="w-280 h-192 p-10 flex flex-col items-start gap-6 border-[#BFBFBF] border-3 rounded-3xl 
    bg-white">
        <!-- Header Container -->
        <div class="w-full flex justify-between items-center border">
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
            <div class="flex justify-between items-center w-1/12">
                <img src="@\assets\rating-assets\star-full.svg" width="28px">
                <div class="font-bold text-3xl leading-10">4.0</div>
            </div>
        </div>

        <!-- Title Container -->
        <div class="w-full h-[14%] flex items-center font-bold leading-8 text-4xl border">
            <slot name = "review-title">Title of Review</slot>
        </div>

        <!-- Comment Container -->
        <div class="h-[56%] flex flex-col border">
            <!-- Review Container -->
            <div class="w-full text-[16px] leading-6 grow">
                <slot name="review">
                    I have stayed at this apartment for a while, and let me say, it is as the name says. 
                    It's a really cool apartment and it has a lot of the amenities 
                    that a student would want from...
                </slot>
            </div>

            <!-- CHANGE THIS TO CONDITIONAL SLOTTING -->
            <template v-if="$slots.ownerReply">
                <!-- Reply Container -->
                <div class="w-full h-[50%] mt-3">
                    <div class="bg-[#D9D9D9] h-full rounded-3xl 
                    flex flex-col justify-start items-center p-5.5 gap-1.25">
                        <div class="italic text-left w-full text-[14px] leading-6">
                            Reply from the owner
                        </div>
                        <div class="w-full text-[16px] leading-6">
                            <slot name="ownerReply">
                            </slot>
                        </div>
                    </div>
                </div>
            </template>
        </div>


    </div>

</template>