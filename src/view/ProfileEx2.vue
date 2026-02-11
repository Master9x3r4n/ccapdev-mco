<script setup>
// Paste this into the props definition for Set 3
import ProfileView from "@/view/ProfileView.vue";

const props = defineProps({
	profile: {
		type: Object,
		default: () => ({
			name: "Taylor Morgan",
			username: "tmorgan_med",
			joinDate: "March 2nd, 2020",
			bio: "Med student. Need absolute silence for studying.",
			school: "UP Manila",
			schoolSince: "Since 2021",
			profileImg: "https://i.pinimg.com/736x/4c/08/6f/4c086f7e5b160afad39dbf3432be6022.jpg",
			dorm: "The Scholar's Den",
			dormSince: "Since 2022",
			reviewCount: "3",
			reviewSince: "Since March 2022"
		})
	},
	reviews: {
		type: Array,
		default: () => [
			{ id: 1, title: 'Metro Haven Suites', rating: '4.5', review: 'fantasticish', img: 'https://i.pinimg.com/736x/9f/6a/7c/9f6a7c1b0383d3c5bfaa50372f08c4ed.jpg'},
		]
	}
});
</script>

<template>
	<ProfileView :profile="profile" :reviews="reviews" />
</template>

<style scoped>

</style>