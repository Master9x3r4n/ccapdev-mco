<script setup>
import SearchBar from "@/components/header/SearchBar.vue";
import Logo from "@/components/header/Logo.vue";
import ProfileIcon from "@/components/header/ProfileIcon.vue";

const props = defineProps({
  search: {
    type: String,
    default: true,
  },
  profileImg: {
    type: String,
    default: "",
  },
  profileAlt: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <header class="sticky top-0 z-50 flex h-[76px] w-full items-center bg-white px-4 py-3 shadow-md justify-between">
    <Logo />
    <SearchBar v-if="props.search" />
    <ProfileIcon :src="profileImg" :alt="profileAltlt" />
  </header>
</template>

<style scoped>

</style>