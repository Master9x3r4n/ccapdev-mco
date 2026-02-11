<script setup>
import ProfileView from "@/view/ProfileView.vue";

const props = defineProps({
	// Grouped Profile Details
	profile: {
		type: Object,
		default: () => ({
			name: "Jordan Lee",
			username: "jlee_99",
			joinDate: "March 3rd, 2020",
			bio: "Engineering student. Gamer. Night owl.",
			school: "De La Salle University",
			schoolSince: "Since 2022",
			profileImg: "https://i.pinimg.com/1200x/40/71/e3/4071e33ef6d3d34178fac2a3e11e358b.jpg",
			dorm: "Urban Hive Lofts",
			dormSince: "Since 2023",
			reviewCount: "8",
			reviewSince: "Since Sept 2022"
		})
	},
	// Reviews Array
	reviews: {
		type: Array,
		default: () => [
			{ id: 1, title: 'Urban Hive Lofts', rating: '5.0', review: 'fantastic', img: 'https://i.pinimg.com/736x/50/d7/51/50d7511c8e4af87f12bf0f23520f319e.jpg'},
			{ id: 2, title: "The Scholar's Den", rating: '4.0', review: 'somewhat fantastic', img: 'https://i.pinimg.com/1200x/c1/e5/c3/c1e5c3911e549f0bee199dbf73e98908.jpg'},
		]
	}
});
</script>

<template>
	<ProfileView :profile="profile" :reviews="reviews" />
</template>

<style scoped>

</style>