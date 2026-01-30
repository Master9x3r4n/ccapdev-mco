<template>
    <p class ="bg-white dark:bg-black dark:text-white"> Hello </p>
  	<button class="border p-2 m-4 active:bg-gray-400" @click="toggleDarkMode()">Click Me!</button>
</template>

<script setup>
	import {ref, watch} from "vue"

	const darkMode = ref(false)

	watch(darkMode, (enabled) => {
    	document.documentElement.classList.toggle('dark', enabled)
  	})

	const toggleDarkMode = () => {
		darkMode.value = !darkMode.value
		console.log(darkMode.value)
	}

</script>


