import { createStore } from 'vuex'

export default createStore({
    state () {
        return {
            votes: 0
        }
    },

    mutations: {
        reset (state) {
            state.votes = 0
        },

        vote (state) {
            state.votes = state.votes + 1
        },
    }
})