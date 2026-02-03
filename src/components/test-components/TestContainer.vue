<script setup>
    const props = defineProps(['dir'])
</script>

<template>
    <div class="p-4 flex justify-center items-center border-b-4 bg-white 
        dark:bg-[#656565] dark:border-[#494949]"
        :class="(props.dir == 'row')? 'flex-row' : 'flex-col'">
        <slot></slot>
    </div>
</template>