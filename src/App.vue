<template>
  <div class="bg-gray-50 min-h-screen">
    <the-header />
    <router-view />
  </div>
</template>

<script setup>
import { useDataStore } from "./store/data";
import TheHeader from "./components/TheHeader.vue";

const dataStore = useDataStore();

dataStore.getLocalStoreData();
</script>
