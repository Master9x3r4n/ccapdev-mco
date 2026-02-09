<script setup>
import { ref } from 'vue'

// ts cannot handle page counts of less than or more than 5
const activePage = ref(1)
const pages = [1, 2, 3, 4, 5]

const setPage = (page) => {
  activePage.value = page
}
</script>

<template>
  <div class="flex flex-row justify-center items-center w-[204px] h-[37px] gap-[5px]">

    <button
        class="w-[15px] h-[16.15px] flex items-center justify-center focus:outline-none hover:opacity-80 transition-opacity"
        @click="activePage > 1 ? activePage-- : null"
    >
      <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="-rotate-90">
        <path d="M7.5 0L14.8612 16.15H0.138784L7.5 0Z" fill="#355AFF"/>
      </svg>
    </button>

    <button
        v-for="page in pages"
        :key="page"
        @click="setPage(page)"
        class="flex flex-col justify-center items-center w-[28.37px] h-[37px] rounded-[10px] text-[16px] font-bold leading-[19px] transition-colors duration-200"
        :class="[
        activePage === page
          ? 'bg-[#355AFF] text-white'
          : 'text-[#BFBFBF] hover:text-[#355AFF] hover:bg-gray-100'
      ]"
    >
      {{ page }}
    </button>

    <button
        class="w-[15px] h-[16px] flex items-center justify-center focus:outline-none hover:opacity-80 transition-opacity"
        @click="activePage < 5 ? activePage++ : null"
    >
      <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg" class="rotate-90">
        <path d="M7.5 0L14.8612 16.15H0.138784L7.5 0Z" fill="#355AFF"/>
      </svg>
    </button>

  </div>
</template>

<style scoped>
button {
  font-family: 'Inter', sans-serif;
}
</style>