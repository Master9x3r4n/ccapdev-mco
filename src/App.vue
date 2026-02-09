<script setup>
  import {RouterView} from "vue-router";
  import FooterComponent from "./components/footer/FooterComponent.vue";
</script>

<template>
  <div>
    <RouterView />
    <FooterComponent/>
  </div>
</template>

<style lang = "scss" scoped></style>
