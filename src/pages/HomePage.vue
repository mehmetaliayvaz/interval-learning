<template>
  <div class="page-wrapper">
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <base-modal id="addNewData-modal" btn-text="Yeni Bilgi Ekle">
          <AddData @add-data="dataStore.setPushData($event)" />
        </base-modal>

        <base-card v-for="(item, index) in data" :key="index" :item="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDataStore } from "../store/data";
import BaseCard from "../components/BaseCard.vue";
import BaseModal from "../components/BaseModal.vue";
import AddData from "../components/AddData.vue";

const dataStore = useDataStore();
const data = computed(() => dataStore.getData);
</script>

<style></style>
