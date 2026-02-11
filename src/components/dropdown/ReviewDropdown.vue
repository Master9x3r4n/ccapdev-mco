<script setup>

import Dropdown from "@/components/dropdown/Dropdown.vue";
import RatingCard from "@/components/side-cards/RatingCard.vue";
import BlueButton from "@/components/page-buttons/BlueButton.vue";
</script>

<template>
	<Dropdown width="1200px">
		<template #trigger>
			<BlueButton>
				<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 11.25V14H2.75L10.8625 5.8875L8.1125 3.1375L0 11.25ZM13.0375 3.7125C13.325 3.425 13.325 2.9625 13.0375 2.675L11.325 0.9625C11.0375 0.675 10.575 0.675 10.2875 0.9625L8.9 2.35L11.65 5.1L13.0375 3.7125Z" fill="white"/>
				</svg>
				<span class="font-normal text-[16px] leading-[19px] text-white">Write</span>
			</BlueButton>
		</template>
		<template #content>
			<div class="flex flex-row justify-between items-center gap-2">

				<div class="flex flex-col items-end gap-[20px] w-full max-w-[697px]">

					<!-- Input Container -->
					<div class="box-border flex flex-col items-start p-[40px] w-full h-[469px] bg-[#EAEAEA] rounded-[20px] self-stretch">
      											<textarea
																class="w-full h-full bg-transparent border-none outline-none resize-none italic font-normal text-[16px] leading-[19px] text-[#676767] placeholder-[#676767]"
																placeholder="Start writing..."
														></textarea>
					</div>
					<div class="flex flex-row items-end gap-[20px]">
						<!-- Upload Media Button -->
						<BlueButton>
							<svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#FFFF"><path d="M431-342.78v-305.83L330.52-547.56l-69.65-68.53L480-835.22l219.13 219.13-69.65 68.53L529-648.61v305.83h-98Zm-160.5 170q-41.02 0-69.37-28.5t-28.35-69.5v-72h98v72h418.44v-72h98v72q0 41-28.51 69.5t-69.53 28.5H270.5Z"/></svg>
							<span class="font-semibold text-[16px] leading-[19px] text-white">
															Upload
															</span>
						</BlueButton>

						<!-- Submit Button -->
						<BlueButton>
							<span class="font-semibold text-[16px] leading-[19px] text-white">Submit</span>
						</BlueButton>
					</div>

				</div>
				<RatingCard></RatingCard>
			</div>
		</template>
	</Dropdown>
</template>

<style scoped>

</style>