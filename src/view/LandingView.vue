<script setup>
import SearchBar from '@/components/header/SearchBar.vue';
import LandingCategory from '@/components/landing/LandingCategory.vue';


const universityFilters = [
	"De La Salle University", "University of Santo Thomas",
	"University of the Philippines - Diliman", "Ateneo De Manila University"
]

const homeTypes = [
	"Studio", "1 bedroom", "2 bedrooms", "Dormitory"
]

</script>

<template>
<div class="flex flex-col justify-around gap-8 w-full h-fit">
	<!-- Hero Section -->
	<div class="w-full h-113 bg-blue-200 dark:bg-[#121422] flex justify-end">
		<div class="h-full w-[80%] bg-gradient dark:dg-gradient flex flex-col items-end text-right text-white gap-2">
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
			<div class="flex justify-end w-full h-full relative mt-5 mr-12">
        <SearchBar type="alt"/>
			</div>		
		</div>
	
	</div>

	<!-- Main Section -->
	<div class="w-full h-fit flex flex-col gap-10 justify-start px-12 pb-4">
		<!-- First Category -->
		<LandingCategory :filterItems="universityFilters"/>

		<!-- Second Category -->
		<LandingCategory :filterItems="homeTypes">
			<template #text>
				Find homes of a certain type
			</template>
		</LandingCategory>
	</div>

</div>
</template>

<style scoped>

.bg-gradient {
	background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #355AFF 27.7%);
}

.dg-gradient {
	background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #121422 27.7%);
}

</style>


