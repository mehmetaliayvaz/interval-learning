<template>
  <div class="page-wrapper">
    <div class="container">
      <div v-if="data.length" class="flex flex-col items-center">
        <button class="btn btn-primary mb-10" @click="showContent()">
          YENİ BİLGİ GETİR
        </button>
        <base-card
          :item="showItem"
          :show-actions="true"
          @action="updateDataDegree($event)"
          class="md:w-1/3"
          :class="loading ? 'opacity-70 pointer-events-none' : ''"
        />
      </div>
      <div v-else class="flex flex-col items-center">
        <h2 class="text-2xl font-bold mb-5">Henüz bilgi eklenmemiş...</h2>
        <router-link :to="{ name: 'home' }" class="btn btn-primary"
          >Bilgi Ekle</router-link
        >
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
const tempArray = ref([]);
const randomItem = ref();
const loading = ref(false);

const showContent = () => {
  data.value.forEach((item) => {
    for (let i = 0; i < item.degree; i++) {
      tempArray.value.push(item);
    }
  });

  //shuffle array
  for (let i = tempArray.value.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tempArray.value[i], tempArray.value[j]] = [
      tempArray.value[j],
      tempArray.value[i],
    ];
  }

  randomItem.value = Math.floor(Math.random() * tempArray.value.length);
  showItem.value = tempArray.value[randomItem.value];
};
showContent();

const updateDataDegree = (event) => {
  dataStore.updateDataDegree(event.id, event.action);
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    showContent();
  }, 400);
};
</script>

<style></style>
