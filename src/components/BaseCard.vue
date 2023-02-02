<template>
  <div class="card bg-white shadow">
    <div class="card-body p-5">
      <div class="flex justify-between">
        <h2 class="card-title">{{ item.title }}</h2>
        <button v-if="!showActions" @click="emits('delete', item.id)">
          <x-circle-icon class="w-6 h-6 text-gray-700" />
        </button>
      </div>
      <p class="mb-10">{{ item.content }}</p>
      <div v-if="showActions" class="card-actions justify-center my-4">
        <button class="btn btn-success btn-sm" @click="itemAction(-1)">
          Daha Az Gör
        </button>
        <button class="btn btn-error btn-sm" @click="itemAction(1)">
          Daha Sık Gör
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { XCircleIcon } from "@heroicons/vue/24/solid";
const emits = defineEmits(["action", "delete"]);

const itemAction = (action) => {
  emits("action", { action: action, id: props.item.id });
};

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  showActions: {
    type: Boolean,
    default: false,
  },
});
</script>

<style></style>
