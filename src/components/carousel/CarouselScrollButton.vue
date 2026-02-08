<script setup>
    const props = defineProps({
        direction: {
            type: String,
            default: "left"
        },
        spacing: {
            type: Number,
            default: 6
        },
        adjust: {
            type: String,
            default: "small"
        }
    })
</script>

<template>
    <button 
    class="border-none rounded-[50%] flex justify-center items-center top-6/12
    font-bold p-0 absolute
    text-white text-shadow-lg"
    :style="{ [direction === 'left' ? 'left' : 'right']: `${spacing * 0.25}rem` }"
    :class="props.adjust">
        <slot></slot>
    </button>
</template>

<style scoped>
@import "tailwindcss";

.circular {
    @apply bg-blue-500;
}

.small {
    @apply size-8 text-2xl;
}

.large {
    @apply size-12 text-4xl;
}

</style>