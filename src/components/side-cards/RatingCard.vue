<script setup>
import { ref, watch, h } from 'vue'
import StarToggleButton from "@/components/page-buttons/StarToggleButton.vue";

const props = defineProps({
	overallRating: {
		type: String, // String to keep '4.0' formatting
		default: '4.0'
	},
	attributes: {
		type: Array,
		default: () => [
			{ name: 'Cleanliness', rating: 3 },
			{ name: 'Accuracy', rating: 3 },
			{ name: 'Communication', rating: 3 },
			{ name: 'Location', rating: 3 }
		]
	}
})

// Create local state to make the ratings interactive
const localAttributes = ref(JSON.parse(JSON.stringify(props.attributes)))

// Sync with props if they change
watch(() => props.attributes, (newVal) => {
	localAttributes.value = JSON.parse(JSON.stringify(newVal))
}, { deep: true })

// Logic: Clicking the Nth star sets rating to N
const setRating = (index, rating) => {
	localAttributes.value[index].rating = rating
}

const SettingsIcon = () => h('svg', { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 -960 960 960", width: "24px", fill: "#355AFF" }, [
	h('path', { d: "M353.61-60.78 336.48-195q-8.48-3.3-16.31-8.04-7.82-4.74-15.43-9.92l-124.65 52.83L53.13-380.65l107.52-81.39q-.43-4.74-.43-8.98v-17.96q0-4.24.43-8.98L53.13-579.35l126.96-219.39 125.78 52.26q7.61-5.17 15.09-9.63 7.47-4.46 15.52-7.76l17.13-135.35h252.78l17.13 135.35q8.48 3.3 16.31 7.76 7.82 4.46 15.43 9.63l124.65-52.26 126.96 219.39-108.09 81.39q.44 4.74.44 8.98v8.98q0 4.74-.28 8.98-.29 4.24-1.16 8.98l108.09 81.39-127.52 220.52-124.22-52.83q-7.61 5.18-15.09 9.92-7.47 4.74-15.52 8.04L606.39-60.78H353.61ZM480.3-340q58 0 99-41t41-99q0-58-41-99t-99-41q-58.43 0-99.21 41-40.79 41-40.79 99t40.79 99q40.78 41 99.21 41Z" })
]);
</script>

<template>
	<!-- Main Container -->
	<div class="box-border flex flex-col items-start p-[40px] gap-[20px] w-full max-w-[403px] h-fit border-[2px] border-[#BFBFBF] rounded-[20px]">

		<!-- Header -->
		<div class="flex flex-row justify-between items-center w-full">
			<!-- "Overall" Text -->
			<span class="font-bold text-[24px] leading-[29px] text-black">
        Overall
      </span>

			<!-- Score Box -->
			<div class="flex flex-row justify-center items-center gap-[10px]">
				<!-- Big Star Container -->
				<div class="flex items-center justify-center w-[42px] h-[42px]">
					<svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#355AFF"><path d="m209.64-87.4 71.4-307.95L41.75-602.62l315.51-26.89L480-920.13l122.74 290.62 315.51 26.89-239.29 207.27L750.74-87.4 480-251.29 209.64-87.4Z"/></svg>
				</div>
				<!-- Score Text -->
				<span class="font-bold text-[24px] leading-[29px] text-black">
          {{ overallRating }}
        </span>
			</div>
		</div>

		<!-- Divider -->
		<div class="w-full h-[2px] bg-[#C5C5C5]"></div>

		<!-- Attributes List -->
		<div class="flex flex-col items-start gap-[30px] w-full">

			<!-- Attribute Item Loop -->
			<div v-for="(attr, index) in localAttributes" :key="index" class="flex flex-col items-start gap-[15px] w-full">

				<!-- Label Row -->
				<div class="flex flex-row items-center gap-[15px]">
					<!-- Icon placeholder (Vector) -->
					<SettingsIcon />

					<!-- Attribute Name -->
					<span class="font-normal text-[20px] leading-[24px] text-black">
        {{ attr.name }}
      </span>

					<!-- Info Icon (Vector) -->
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="8" cy="8" r="8" fill="#BFBFBF"/>
						<path d="M7 4H9V6H7V4ZM7 8H9V12H7V8Z" fill="white"/>
					</svg>
				</div>

				<!-- Stars Row -->
				<div class="flex flex-row justify-between items-center w-full gap-[10px]">
					<!-- Loop 1 to 5 for the stars -->
					<!-- Logic: If Star 3 is clicked, rating becomes 3. Stars 1, 2, 3 are filled. -->
					<StarToggleButton
							v-for="starNum in 5"
							:key="starNum"
							:model-value="starNum <= attr.rating"
							size="30px"
							@click.stop="setRating(index, starNum)"
					/>
				</div>

			</div>

		</div>

	</div>
</template>