import { createStore } from 'vuex'
import type {State} from "@/types";

export default createStore<State>({
  state: {
    question: '',
    answers: []
  },
  getters: {
    totalVotes(state: State) {
      return state.answers.reduce((acc, answer) => acc + answer.votes, 0)
    },
    isValidPoll(state: State) {
        return state.question.length > 0 && state.answers.length >= 2
    }
  },
  mutations: {
    reset(state: State) {
      state.question = ''
      state.answers = []
    },
    setQuestion(state: State, question: string) {
      state.question = question
    },
    addAnswer(state: State, answerText: string) {
      // Check if the answer already exists to prevent duplicates
      const existing = state.answers.find((answer) => answer.text === answerText)
      if (!existing && state.answers.length < 10) {
        state.answers.push({ text: answerText, votes: 0 })
      }
    },
    removeAnswer(state: State, answerText: string) {
      const index = state.answers.findIndex((answer) => answer.text === answerText)
      if (index !== -1) {
        state.answers.splice(index, 1)
      }
    },
    vote(state: State, answerText: string) {
      const answer = state.answers.find((answer) => answer.text === answerText)
      if (answer) {
        answer.votes += 1
      }
    },
  }
})
