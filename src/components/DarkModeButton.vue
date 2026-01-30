<script setup>
    import {ref, watch} from "vue"

	const theme = {
		"light": {
			"src": "src/assets/darkmode-assets/sun-svgrepo-com.svg",
			"alt": "Light Mode Icon"
		},
		"dark": {
			"src": "src/assets/darkmode-assets/moon-svgrepo-com.svg",
			"alt": "Dark Mode Icon"
		}
	}

    const darkMode = ref(false)
	const iconSrc = ref(theme.light)

    watch(darkMode, (enabled) => {
        document.documentElement.classList.toggle('dark', enabled)
    })

    const toggleDarkMode = () => {
      darkMode.value = !darkMode.value
      if (darkMode.value) {
		iconSrc.value = theme.dark
	  } else {
		iconSrc.value = theme.light
	  }
	  console.log(iconSrc.value.src)
    }
</script>

<template>
  	<button class="border-2  rounded-2xl p-2 m-4 dark:bg-black" @click="toggleDarkMode()">
		<img :src="iconSrc.src" :alt="iconSrc.alt"
		width = "20px" height= "20px">
	</button>
</template>