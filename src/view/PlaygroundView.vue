<script setup>
import DarkModeButton from '@/components/DarkModeButton.vue';


</script>

<template>
    <!-- Dark Mode Button -->
	<div class ="p-4 flex justify-center items-center">
        <span class = "m-1 p-2 border-4 rounded-2xl text-white
        bg-[#169cda] border-[#0f77a7]
        dark:text-white dark:bg-[#0c2f8e] dark:border-[#0a2878]">
            Theme 
        </span>
        <DarkModeButton />
    </div>

    <!-- Carousel -->


</template>