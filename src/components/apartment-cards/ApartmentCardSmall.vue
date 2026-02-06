<script setup>
</script>

<template>
    <div class=
    "h-104.75 w-110 rounded-[25px] 
    p-0 shadow-2xl relative
    bg-white flex flex-col items-center">
    <!-- Photo h-40%-->
        <div class=
        "w-full h-5/12 rounded-t-[25px] 
        absolute left-0 right-0 top-0
        bg-gradient"></div>

        <!-- Frame -->
       <div class="
       absolute
       top-[45%] w-[90%] h-[50%]
       ">
            <slot></slot>
       </div>
    </div>
</template>



<style scoped>

.bg-gradient {
    background: linear-gradient(99.9deg, #517FFF 1.35%, #312AFF 99.48%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

</style>
