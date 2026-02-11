<script setup>
defineEmits(['click'])
</script>

<template>
  <button
      @click="$emit('click')"
      class="flex flex-row items-center justify-center px-[15px] py-[5px] gap-[10px] w-fit h-fit bg-[#355AFF] rounded-[25px] hover:bg-[#2C0ED6] transition-colors duration-200 group cursor-pointer"
  >
    <slot></slot>
  </button>
</template>

<style scoped>

</style>