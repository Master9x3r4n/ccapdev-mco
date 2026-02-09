<script setup>
import SearchBar from '@/components/header/SearchBar.vue';
import LandingCategory from '@/components/landing/LandingCategory.vue';




</script>

<template>
<div class="flex flex-col justify-around gap-8 w-full h-fit">
	<!-- Hero Section -->
	<div class="w-full h-113 bg-blue-200 flex justify-end">
		<div class="h-full w-[80%] bg-gradient flex flex-col items-end text-right text-white gap-2">
			<div class="mr-12 mt-14 w-[64%]">
				<!-- Main text -->
				<div class="text-6xl leading-20">
					We find homes <span class="underline italic font-bold">fantastic</span> for you!
				</div>
				<!-- Subtext -->
				<div class=" text-2xl leading-7 mt-5">
					Find the best fitting apartments and condominiums for you, rated by 
					<span class="underline italic">students just like you!</span>
				</div>
			</div>

			<!-- Search bar -->
			<div class="w-full h-full relative">
				<div class="absolute right-2 top-0 w-148">
					<SearchBar type="alt"/>
				</div>
			</div>		
		</div>
	
	</div>

	<!-- Main Section -->
	<div class="w-full h-fit flex flex-col gap-10 justify-start px-12 pb-4">
		<!-- First Category -->
		<LandingCategory/>

		<!-- Second Category -->
		<LandingCategory/>
	</div>

</div>
</template>

<style scoped>

.bg-gradient {
	background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #355AFF 27.7%);
}

</style>


