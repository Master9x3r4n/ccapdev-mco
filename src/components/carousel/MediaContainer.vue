<script setup>

const props = defineProps({
    src: {
        type: String,
        default: ""
    },
    alt: {
        type: String,
        default: "media"
    }
})

</script>

<!-- 740 x 430 -->
<template>
        <div class="w-185 h-107.5 flex justify-center items-center rounded-3xl"
        :class="!props.src? 'bg-gradient': ''">
            <img v-if="props.src" :src="props.src" width="740px" :alt="props.alt"
            class="rounded-3xl">
        </div>
</template>



<style scoped>
.bg-gradient {
    background: linear-gradient(97.79deg, #355AFF -0.78%, #2C0ED6 100%);
}

</style>