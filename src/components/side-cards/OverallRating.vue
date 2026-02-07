<script setup>

</script>

<template>
    <div class="flex flex-col justify-center items-center 
    p-10 gap-3.75 w-105.25 h-80.75 border-3 rounded-3xl
    border-[#BFBFBF] bg-white">
        <!-- Header Container -->
        <div class="h-12 w-full font-bold text-3xl leading-10 
        flex items-center justify-between">
            <!-- Overall -->
            <div>Overall</div>

            <!-- Rating -->
            <div class="flex justify-between items-center w-3/12">
                <img src="@\assets\rating-assets\star-full.svg" width="32px">
                <div>4.0</div>
            </div>
        </div>

        <!-- Divider -->
        <div class="border-b-2 w-full border-[#BFBFBF]">
        </div>

        <!-- Attributes -->
        <template v-for="i in 4">
            <div class="w-full text-2xl leading-7 flex items-center justify-between">
                <!-- Attribute -->
                <div>Attribute</div>

                <!-- Rating -->
                <div class="flex justify-between items-center w-[20%]">
                    <img src="@\assets\rating-assets\star-full.svg" width="24px">
                    <div>4.0</div>
                </div>
            </div>
        </template>

    </div>
</template>