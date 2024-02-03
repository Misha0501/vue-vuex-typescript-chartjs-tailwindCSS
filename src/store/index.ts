import { createStore } from 'vuex'

interface State {
  question: string
  answers: string[]
}

export default createStore<State>({
  state: {
    question: '',
    answers: []
  },

  mutations: {
    reset(state) {
      state.question = ''
      state.answers = []
    },

    vote(state) {
      state.votes += 1
    },

    setQuestion(state, question: string) {
      state.question = question
    },

    addAnswer(state, answer: string) {
      if (answer.trim() !== '' && state.answers.length < 10) {
        state.answers.push(answer)
      }
    },

    removeAnswer(state, index: number) {
      if (index >= 0 && index < state.answers.length) {
        state.answers.splice(index, 1)
      }
    }
  }
})
