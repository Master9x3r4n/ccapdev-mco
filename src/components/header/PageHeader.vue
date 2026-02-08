<script setup>
import SearchBar from "@/components/header/SearchBar.vue";
import Logo from "@/components/header/Logo.vue";
import ProfileIcon from "@/components/header/ProfileIcon.vue";
import Dropdown from "@/components/header/Dropdown.vue";

const props = defineProps({
  search: {
    type: Boolean,
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
    <div :class="[{'invisible': !props.search}, 'w-full']">
      <SearchBar />
    </div>
    <Dropdown>
      <template #trigger>
        <button class="rounded-full transition-all duration-200 hover:scale-105 hover:bg-accent">
          <ProfileIcon :src="profileImg" :alt="profileAlt" />
        </button>
      </template>
      <template #content>
        <div class="flex flex-row items-center justify-center w-[231px] h-[58px] gap-[15px]">

          <ProfileIcon
              :src="profileImg"
              :alt="profileAlt"
              size-class="w-[58px] h-[58px]"
          />

          <div class="flex flex-col justify-center items-start w-[158px] h-[48px] grow">

      <span class="text-[#676767] text-[16px] leading-[19px]">
        Logged in as
      </span>

            <span class="text-[#355AFF] text-[24px] leading-[29px]">
        @username
      </span>

          </div>
        </div>
      </template>
    </Dropdown>
  </header>
</template>

<style scoped>

</style>