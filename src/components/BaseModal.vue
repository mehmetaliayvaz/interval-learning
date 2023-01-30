<template>
  <label :for="id" class="btn h-full">{{ btnText }}</label>
  <input type="checkbox" :id="id" class="modal-toggle" />
  <label :for="id" class="modal cursor-pointer">
    <label class="modal-box relative space-y-5">
      <slot />
    </label>
  </label>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  btnText: {
    type: String,
    required: false,
    default: "Modal Aç",
  },
});
</script>

<style></style>
