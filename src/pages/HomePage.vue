<template>
  <div class="page-wrapper">
    <div class="container">
      <h2 v-if="!data.length" class="text-2xl font-bold text-center mb-5">
        Henüz bilgi eklenmemiş...
      </h2>
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
import { useDataStore } from "../store/data";
import BaseCard from "../components/BaseCard.vue";
import BaseModal from "../components/BaseModal.vue";
import AddData from "../components/AddData.vue";

const dataStore = useDataStore();
const data = computed(() => dataStore.getData);

const deleteDataItem = (id) => {
  dataStore.deleteData(id);
};
</script>

<style></style>
