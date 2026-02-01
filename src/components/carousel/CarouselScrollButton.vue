<script setup>
    const props = defineProps(['direction'])
</script>

<template>
    <button 
    class="border-none rounded-[50%] text-white font-semibold bg-blue-500
    size-8 text-2xl flex justify-center items-center p-0 absolute top-5/12"
    :class="direction == 'left' ? 'left-0' : 'right-0'">
        <span><slot></slot></span>
    </button>
</template>