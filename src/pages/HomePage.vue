<template>
  <div class="page-wrapper">
    <div class="container">
      <div v-if="!data.length" class="flex flex-col items-center mb-5">
        <h2 class="text-2xl font-bold text-center mb-5">
          Henüz bilgi eklenmemiş...
        </h2>
        <button class="btn" @click="setExampleData()">
          ÖRNEK VERİLER GETİR
        </button>
      </div>
      <div class="mb-10 flex justify-center">
        <base-modal id="addNewData-modal" btn-text="YENİ BİLGİ EKLE">
          <AddData @add-data="dataStore.setPushData($event)" />
        </base-modal>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <base-card
          v-for="(item, index) in data"
          :key="index"
          :item="item"
          @delete="deleteDataItem($event)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { exampleData } from "../helpers/exampleData";
import { useDataStore } from "../store/data";
import BaseCard from "../components/BaseCard.vue";
import BaseModal from "../components/BaseModal.vue";
import AddData from "../components/AddData.vue";

const dataStore = useDataStore();
const data = computed(() => dataStore.getData);

const deleteDataItem = (id) => {
  dataStore.deleteData(id);
};

const setExampleData = () => {
  dataStore.setExampleData(exampleData.slice());
};
</script>

<style></style>
