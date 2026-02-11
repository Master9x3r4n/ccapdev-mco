<script setup>
import { h } from 'vue'

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false
	},
	size: {
		type: String,
		default: "30px" // Default size matching your UI
	}
})

const emit = defineEmits(['update:modelValue'])

const toggle = () => {
	emit('update:modelValue', !props.modelValue)
}

// Icon Definitions
const BlueStarIcon = () => h('svg', { xmlns: "http://www.w3.org/2000/svg", height: "100%", viewBox: "0 -960 960 960", width: "100%", fill: "#355AFF" }, [
	h('path', { d: "m204.74-81 72.91-313.22L34.22-605.26 355-632.52l125-295.53 125 295.53 320.78 27.26-243.43 211.04L755.26-81 480-247.52 204.74-81Z" })
]);

const GrayStarIcon = () => h('svg', { xmlns: "http://www.w3.org/2000/svg", height: "100%", viewBox: "0 -960 960 960", width: "100%", fill: "#BFBFBF" }, [
	h('path', { d: "M364.74-302.26 480-371.48l115.26 70.22-30.74-131 101.96-88.09-133.57-11.87L480-656.35l-52.91 123.7-133.57 11.3 101.96 88.52-30.74 130.57ZM204.74-81l72.91-313.22L34.22-605.26 355-632.52l125-295.53 125 295.53 320.78 27.26-243.43 211.04L755.26-81 480-247.52 204.74-81ZM480-468.3Z" })
]);
</script>

<template>
	<button
			type="button"
			@click="toggle"
			class="flex items-center justify-center transition-transform active:scale-95 cursor-pointer focus:outline-none"
			:style="{ width: size, height: size }"
	>
		<component :is="modelValue ? BlueStarIcon : GrayStarIcon" />
	</button>
</template>