<script setup>
    import { computed } from 'vue'

    const props = defineProps({
    value: {
        type: String,
        required: true
    },
    modelValue: {
        type: Array,
        default: () => []
    }
    })

    const emit = defineEmits(['update:modelValue'])

    const isChecked = computed(() => props.modelValue.includes(props.value))

    const toggle = () => {
        const newValue = [...props.modelValue]
        const index = newValue.indexOf(props.value)
        
        if (index > -1) {
            newValue.splice(index, 1);
        } else {
            newValue.push(props.value);
        }
        
        emit('update:modelValue', newValue);
    }
</script>

<template>
  <div 
    class="w-51 h-10 flex justify-center items-center pt-2.5 pb-2.5 pl-5 pr-5
    border-4 border-[#355AFF] rounded-2xl whitespace-nowrap cursor-pointer"
    :class="isChecked ? 'bg-[#355AFF] text-white' : 'bg-white text-[#355AFF]'"
    @click="toggle"
  >
    <div class="w-41.25 h-4.75 flex items-center justify-center text-center">
      <slot>Really Cool University</slot>
    </div>
  </div>
</template>