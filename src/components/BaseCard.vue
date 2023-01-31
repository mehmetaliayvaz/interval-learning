<template>
  <div class="card bg-white shadow">
    <div class="card-body">
      <h2 class="card-title">{{ item.title }}</h2>
      <p>{{ item.content }}</p>
      <p>{{ item.degree }}</p>
      <div class="card-actions">
        <button class="btn btn-success btn-sm">Learned</button>
        <button class="btn btn-error btn-sm">Repeat</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>
