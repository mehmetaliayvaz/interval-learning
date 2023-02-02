<template>
  <h3 class="text-lg font-bold">Yeni Bilgi Ekle</h3>
  <input
    type="text"
    v-model="newData.title"
    placeholder="Başlık"
    class="input input-bordered w-full"
    :class="{ 'input-error': isError && newData.title === '' }"
  />
  <textarea
    v-model="newData.content"
    class="textarea textarea-bordered w-full"
    placeholder="İçerik"
    :class="{ 'textarea-error': isError && newData.content === '' }"
  ></textarea>
  <button class="btn btn-primary" @click="addData()">Kaydet</button>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDataStore } from "../store/data";

const dataStore = useDataStore();
const dataLength = computed(() => dataStore.getData.length);
const emits = defineEmits(["addData"]);
const isError = ref(false);

const newData = ref({
  title: "",
  content: "",
});

const addData = () => {
  isError.value = true;
  if (newData.value.title !== "" && newData.value.content !== "") {
    emits("addData", { ...newData.value, degree: 5, id: dataLength.value + 1 });
    newData.value = {
      title: "",
      content: "",
    };
    isError.value = false;
  }
};
</script>

<style></style>
