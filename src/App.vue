<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue'
import { useStore } from 'vuex'
import {computed} from "vue";

const store = useStore()

const votes = computed(() => store.state.votes)

const handleResetBtn = () => {
  store.commit('reset')
}

const handleVoteBtn = () => {
  store.commit('vote')
}
</script>

<template>
  <header>
    <div class="bg-amber-300">
      <PageHeader msg="Hello world" />
      <p>Votes: {{ votes }}</p>
      <button @click="handleVoteBtn">Vote</button>
      <button @click="handleResetBtn">Reset</button>
    </div>
  </header>

  <main>
    <p>Main part</p>
  </main>
</template>

<style scoped></style>