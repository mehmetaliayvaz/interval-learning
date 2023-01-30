<template>
  <h3 class="text-lg font-bold">Yeni Bilgi Ekle</h3>
  <input
    type="text"
    v-model="newData.title"
    placeholder="Başlık"
    class="input input-bordered w-full"
  />
  <textarea
    v-model="newData.content"
    class="textarea textarea-bordered w-full"
    placeholder="İçerik"
  ></textarea>
  <button class="btn btn-primary" @click="addData()">Ekle</button>
</template>

<script setup>
import { ref } from "vue";

const emits = defineEmits(["addData"]);

const newData = ref({
  title: "",
  content: "",
});

const addData = () => {
  emits("addData", newData.value);
  newData.value = {
    title: "",
    content: "",
    degree: 5,
  };
};
</script>

<style></style>
