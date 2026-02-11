<script setup>
import ProfileView from "@/view/ProfileView.vue";

const props = defineProps({
	profile: {
		type: Object,
		default: () => ({
			name: "Casey Cruz",
			username: "casey_c",
			joinDate: "March 1st, 2020",
			bio: "Archi student. Loves natural light and good coffee.",
			school: "University of Santo Tomas",
			schoolSince: "Since 2023",
			profileImg: "https://i.pinimg.com/736x/07/ad/21/07ad218a0a5df57b1cf0458c7febd2e3.jpg",
			dorm: "Metro Haven Suites",
			dormSince: "Since 2023",
			reviewCount: "15",
			reviewSince: "Since Jan 2023"
		})
	},
	reviews: {
		type: Array,
		default: () => [
			{ id: 1, title: 'Urban Hive Lofts', rating: '3.0', review: 'midtastic', img: 'https://i.pinimg.com/736x/50/d7/51/50d7511c8e4af87f12bf0f23520f319e.jpg'},
			{ id: 2, title: "The Scholar's Den", rating: '2.0', review: 'mehtastic', img: 'https://i.pinimg.com/1200x/c1/e5/c3/c1e5c3911e549f0bee199dbf73e98908.jpg'},
			{ id: 3, title: 'Metro Haven Suites', rating: '5.0', review: 'fantastic', img: 'https://i.pinimg.com/736x/9f/6a/7c/9f6a7c1b0383d3c5bfaa50372f08c4ed.jpg'},
		]
	}
});
</script>

<template>
	<ProfileView :profile="profile" :reviews="reviews" />
</template>

<style scoped>

</style>