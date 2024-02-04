<script setup lang="ts">
import CreatePoll from '@/components/CreatePoll.vue'
import AnswerPoll from '@/components/AnswerPoll.vue'
import ResultsPoll from '@/components/ResultsPoll.vue'
</script>

<template>
  <header class="max-w-screen-xl mx-auto">
    <div class="h-32 p-2 flex flex-col justify-center">
      <h1 class="text-3xl">A poll application</h1>
    </div>
  </header>

  <main>
    <div
      class="grid auto-cols-fr lg:grid-flow-col border-2 border-black max-w-screen-xl mx-auto min-h-[400px] px-6 py-12 gap-8"
    >
      <CreatePoll />
      <AnswerPoll />
      <ResultsPoll />
    </div>
  </main>
</template>

<style scoped></style>