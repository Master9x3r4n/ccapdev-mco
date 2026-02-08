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
    class="border-none rounded-[50%] flex justify-center items-center top-6/12 w-full
    font-bold p-0 absolute text-center
    text-white text-shadow-lg"
    :style="{ [direction === 'left' ? 'left' : 'right']: `${spacing * 0.25}rem` }"
    :class="props.adjust">
        <div class="h-full w-full flex text-center items-center justify-center absolute bottom-0.5">
            <span v-if="direction === 'left'"><</span>
            <span v-else>></span>
        </div>
    </button>
</template>

<style scoped>
@reference "tailwindcss";

.circular {
    @apply bg-blue-500;
}

.small {
    @apply size-7 text-2xl;
}

.large {
    @apply size-12 text-4xl;
}

</style>