<template>
  <div class="page-wrapper">
    <div class="container">
      <div class="flex flex-col items-center">
        <button class="btn btn-primary mb-5" @click="showContent()">
          Yeni Bilgi Getir
        </button>
        <base-card
          :item="showItem"
          :show-actions="true"
          @action="updateDataDegree($event)"
          class="w-1/3"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useDataStore } from "../store/data";
import BaseCard from "../components/BaseCard.vue";

const dataStore = useDataStore();

const data = computed(() => dataStore.getData);
const showItem = ref({});

const showContent = () => {
  const tempArray = [];
  data.value.forEach((item) => {
    for (let i = 0; i < item.degree; i++) {
      tempArray.push(item);
    }
  });
  const randomItem = Math.floor(Math.random() * tempArray.length);
  showItem.value = tempArray[randomItem];
};
showContent();

const updateDataDegree = (event) => {
  dataStore.updateDataDegree(event.id, event.action);
  showContent();
};
</script>

<style></style>
