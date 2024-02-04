<template>
  <div class="flex flex-col items-center">
    <div v-if="question && answers.length >= 2" class="w-full h-full flex flex-col">
      <h2 class="text-2xl mb-4 break-all">{{ question }}</h2>
      <form @submit.prevent="submitVote" class="h-full flex flex-col justify-between">
        <div>
          <div v-for="answer in answers" :key="answer.text">
            <input
              type="radio"
              :id="answer.text"
              :value="answer.text"
              v-model="selectedAnswer"
              class="mr-2"
            />
            <label :for="answer.text">{{ answer.text }}</label>
          </div>
        </div>
        <button type="submit" class="bg-blue-500 text-white py-2 px-8 mt-4">Vote</button>
      </form>
    </div>
    <div v-else>
      <p>Please add a question and at least two answers to start the poll.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { State } from '@/store'

const store = useStore<State>()
const selectedAnswer = ref<string>('')

const question = computed(() => store.state.question)
const answers = computed(() => store.state.answers)

const submitVote = () => {
  if (selectedAnswer.value) {
    store.commit('vote', selectedAnswer.value)
    selectedAnswer.value = '' // Reset selected answer after voting
  }
}
</script>