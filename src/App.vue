<template>
  <div>
    <RouterView />
    <FooterComponent/>
  </div>
</template>

<script setup>
  import {RouterView} from "vue-router";
  import FooterComponent from "./components/footer/FooterComponent.vue";
</script>

<style lang = "scss" scoped></style>
