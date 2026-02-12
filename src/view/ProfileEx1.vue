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
			{ id: 1, title: 'Grand Apartment', rating: '4.5', review: 'One of my favorite places ever', 
			img: 'https://youre.outof.games/media/uploads/cb/da/cbda1bb4-ee0d-4c65-989f-05a24edd22cf/daily-bugle-featured-location.jpg',
			listingRoute: "/listing1",
		},
			{ id: 2, title: "The Baxter Suite", rating: '4.0', review: 'Very Fantastic for us to live in.', 
			img: 'https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/09/rsz-baxter-buildingv1.jpg',
			listingRoute: "/listing2",
		},
			{ id: 3, title: 'Miro\'s House', rating: '1.0', review: 'meh', 
			img: 'https://static.wikitide.net/peppafanonwiki/thumb/e/ee/Peppa%27s_house_updated.webp/800px-Peppa%27s_house_updated.webp.png',
			listingRoute: "/listing3",
		},
		]
	}
});
</script>

<template>
	<ProfileView :profile="profile" :reviews="reviews" />
</template>

<style scoped>

</style>