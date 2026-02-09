<script setup>
  import {RouterView} from "vue-router";
  import FooterComponent from "./components/footer/FooterComponent.vue";
  import PageHeader from "@/components/header/PageHeader.vue";
</script>

<template>
  <div>
    <PageHeader/>
    <RouterView />
    <FooterComponent/>
  </div>
</template>

<style lang = "scss" scoped></style>
