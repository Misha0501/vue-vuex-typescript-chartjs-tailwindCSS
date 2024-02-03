<script setup lang="ts">
import CreatePoll from '@/components/CreatePoll.vue'
import AnswerPoll from '@/components/AnswerPoll.vue'
import ResultsPoll from '@/components/ResultsPoll.vue'
</script>

<template>
  <header class="max-w-screen-xl mx-auto">
    <div class="h-32 p-2 flex flex-col justify-center bg-amber-300">
      <h1 class="text-3xl">A poll application</h1>
    </div>
  </header>

  <main>
    <div class="border-2 border-black flex justify-between max-w-screen-xl mx-auto min-h-[400px]">
      <CreatePoll />
      <AnswerPoll />
      <ResultsPoll />
    </div>
  </main>
</template>

<style scoped></style>