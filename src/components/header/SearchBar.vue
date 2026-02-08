<script setup>
import { ref, nextTick } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "default",
  }
})

const searchQuery = ref("");
const inputRef = ref(null);

const clearSearch = () => {
  searchQuery.value = "";
  nextTick(() => {
    inputRef.value?.focus();
  })
}
</script>

<template>
  <!-- Default search bar use for the header -->
  <div class="p-8 w-full mx-auto flex justify-center">
    <!-- Search bar container -->
    <div v-if="props.type === 'default'"
        class="
        flex items-center w-155 h-9 overflow-hidden bg-[#EAEAEA]
        border border-gray-300 rounded-full focus-within:ring-2
        focus-within:ring-[#355AFF] focus-within:border-transparent
        transition-all shadow-sm pr-1"
    >
      <!-- Search button -->
      <button
          class="
          bg-[#355AFF] hover:bg-[#2C0ED6] text-white h-full px-2
          flex items-center justify-center transition-colors"
          aria-label="Search"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
        </svg>
      </button>

      <!-- Text box for search queries -->
      <input
          ref="inputRef"
          v-model="searchQuery"
          type="text"
          placeholder="Start searching..."
          class="w-full h-full px-3 outline-none text-sm text-gray-700 bg-[#EAEAEA]"
      />

      <!-- Remove text button -->
      <button
          v-show="searchQuery"
          @click="clearSearch"
          class="
          hover:bg-[#BFBFBF] text-gray-500 p-1 rounded-full
          flex items-center justify-center transition-colors mr-1"
          aria-label="Clear search"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
        </svg>
      </button>
    </div>

    <!-- ALTERNATE SEARCH BAR ty miro -->
    <div v-else-if="props.type === 'alt'"
         class="
         flex items-center w-[591px] h-[54px] overflow-hidden bg-[#FFFFFF]
         border border-gray-300 rounded-full focus-within:ring-2
         focus-within:ring-[#355AFF] focus-within:border-transparent
         transition-all shadow-sm pr-1"
        >
      <!-- Text box for search queries -->
      <input
          ref="inputRef"
          v-model="searchQuery"
          type="text"
          placeholder="Start searching..."
          class="w-full h-full px-3 outline-none text-lg text-gray-700 bg-[#FFFFFF]"
      />

      <!-- Remove text button -->
      <button
          v-show="searchQuery"
          @click="clearSearch"
          class="
          hover:bg-[#BFBFBF] text-gray-500 p-2 rounded-full
          flex items-center justify-center transition-colors mr-1"
          aria-label="Clear search"
      >

        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
        </svg>
      </button>

      <!-- Search button -->
      <button
          class="
          bg-[#355AFF] hover:bg-[#2C0ED6] text-white p-2 rounded-full
          flex items-center justify-center transition-colors mr-1"
          aria-label="Search"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
        </svg>
      </button>

    </div>
  </div>
</template>

<style scoped>
button[v-show="false"] {
  display: none;
}
</style>