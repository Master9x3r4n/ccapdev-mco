<script setup>
    const props = defineProps(['dir'])
</script>

<template>
    <div class="p-4 flex justify-center items-center border-b-4 bg-white 
        dark:bg-[#121422] dark:border-[#3C4583]"
        :class="(props.dir == 'row')? 'flex-row' : 'flex-col'">
        <slot></slot>
    </div>
</template>