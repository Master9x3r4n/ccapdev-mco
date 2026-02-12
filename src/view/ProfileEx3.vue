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
			{ id: 1, title: 'Grand Apartment', rating: '5.0', review: 'Absolutely Grand', 
			img: 'https://youre.outof.games/media/uploads/cb/da/cbda1bb4-ee0d-4c65-989f-05a24edd22cf/daily-bugle-featured-location.jpg',
			listingRoute: "/listing1",},
			{ id: 2, title: "Miro's House", rating: '2.0', review: 'cool ig', 
			img: 'https://static.wikitide.net/peppafanonwiki/thumb/e/ee/Peppa%27s_house_updated.webp/800px-Peppa%27s_house_updated.webp.png',
			listingRoute: "/listing3",},
		]
	}
});
</script>

<template> 
	<ProfileView :profile="profile" :reviews="reviews" />
</template>

<style scoped>

</style>