<script setup>
// Assuming you have imported your ProfileIcon component
import ProfileIcon from './ProfileIcon.vue'

const props = defineProps({
  name: {
    type: String,
    default: 'Charlestrom Kirkland'
  },
  username: {
    type: String,
    default: '@number1masterdebater'
  },
  joinDate: {
    type: String,
    default: 'March 1st, 2026'
  },
  university: {
    type: String,
    default: 'De La Salle University - 2024'
  },
  profileImg: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="flex flex-row items-center gap-[20px] w-fill w-max-[1200px] h-[150px]">

    <ProfileIcon
        :src="profileImg"
        alt="Profile Picture"
        size-class="w-[150px] h-[150px]"
    />

    <div class="flex flex-col justify-center items-start gap-[20px] w-fill w-max-[600px] h-[122px]">

      <div class="flex flex-col items-start gap-[5px] w-full">
        <h1 class=" font-bold text-[32px] leading-[39px] text-black">
          {{ name }}
        </h1>

        <p class="text-[16px] leading-[19px] text-black">
          {{ username }} • <span class="italic text-gray-400">Joined {{ joinDate }}</span>
        </p>
      </div>

      <div class="flex flex-row justify-center items-center px-[20px] py-[10px] gap-[10px] bg-[#355AFF] rounded-[40px]">

        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 6.75L11 0.75L0 6.75L11 12.75L19.25 8.25V15.75H22V6.75ZM11 10.32L3.9875 6.5L11 2.68L18.0125 6.5L11 10.32Z" fill="white"/>
        </svg>

        <span class="font-normal text-[16px] leading-[19px] text-white">
          {{ university }}
        </span>

      </div>

    </div>
  </div>
</template>