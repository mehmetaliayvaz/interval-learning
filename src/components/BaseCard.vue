<template>
  <div class="card bg-white shadow">
    <div class="card-body p-5">
      <div class="flex justify-between">
        <h2 class="card-title">{{ item.title }}</h2>
        <button v-if="!showActions" @click="emits('delete', item.id)">
          <x-circle-icon class="w-6 h-6 text-gray-700" />
        </button>
      </div>
      <p>{{ item.content }}</p>
      <p class="my-5">Derece: {{ item.degree }}</p>
      <div v-if="showActions" class="card-actions">
        <button class="btn btn-success btn-sm" @click="itemAction(-1)">
          Learned
        </button>
        <button class="btn btn-error btn-sm" @click="itemAction(1)">
          Repeat
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
