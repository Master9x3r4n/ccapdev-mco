<script setup>
  import {RouterView, useRoute} from "vue-router";
  import FooterComponent from "./components/footer/FooterComponent.vue";
  import PageHeader from "@/components/header/PageHeader.vue";

  const route = useRoute();
</script>

<template>
  <div>
    <template v-if="!route.meta.search">
        <PageHeader :search="false"/>
    </template>
    <template v-else>
		<PageHeader/>
	</template>
    <RouterView />
    <FooterComponent/>
  </div>
</template>

<style lang = "scss" scoped></style>
