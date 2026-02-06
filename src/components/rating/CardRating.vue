<script setup>

</script>

<template>
    <!-- Lower Review Container -->
    <div class="h-[50%] flex justify-end items-end">
        <!-- Flex-end container -->
        <div class="w-[85%] h-[50%] flex">
            <!-- Review Information -->
            <div class="flex flex-col h-full shrink-0 text-right justify-center">
                <h1 class="font-normal text-[20px] leading-5">
                    5.0
                </h1>
                <p class="italic font-normal text-[12px] leading-4">
                    From 32 reviews
                </p>
            </div>

            <!-- Review Stars -->
            <div class="flex h-full grow-4 justify-evenly items-center pt-auto pb-auto">
                <template v-for="i in 5">
                    <div>
                        <span class="text-2xl">⭐</span>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>