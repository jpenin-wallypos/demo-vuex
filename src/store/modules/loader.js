export const state = {
  isLoading: false,
}

export const actions = {
  simulateAsync({ commit }) {
    commit('SET_LOADING', true)
    setTimeout(() => {
      commit('SET_LOADING', false)
    }, 6000)
  },
}

export const mutations = {
  SET_LOADING(state, value) {
    state.isLoading = value
  },
}
