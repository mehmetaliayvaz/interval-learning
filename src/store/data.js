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

    setExampleData(data) {
      this.data = data;
      this.setLocalStoreData();
    },

    setPushData(data) {
      this.data.push(data);
      this.setLocalStoreData();
    },

    updateDataDegree(id, degree) {
      const item = this.data.find((item) => item.id === id);
      if (
        (degree === 1 && item.degree < 10) ||
        (degree === -1 && item.degree > 1)
      ) {
        item.degree = item.degree + degree;
      }
      this.setLocalStoreData();
    },

    deleteData(id) {
      const index = this.data.findIndex((item) => item.id === id);
      this.data.splice(index, 1);
      this.setLocalStoreData();
    },
  },

  getters: {
    getData() {
      return this.data;
    },
  },
});
