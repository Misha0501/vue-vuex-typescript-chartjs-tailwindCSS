<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div>
    <h1 class="bg-red-500">{{ msg }}</h1>
  </div>
</template>

<style scoped></style>
