import { defineStore } from "pinia";

export const useDataStore = defineStore({
  id: "data",
  state: () => ({
    data: [],
  }),
  actions: {
    setLocalStoreData() {
      localStorage.setItem("data", JSON.stringify(this.data));
    },
    getLocalStoreData() {
      if (localStorage.getItem("data")) {
        this.data = JSON.parse(localStorage.getItem("data"));
      }
    },
    setPushData(data) {
      this.data.push(data);
      this.setLocalStoreData();
    },
  },
  getters: {
    getData() {
      return this.data;
    },
  },
});
