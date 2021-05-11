export const state = {
  value: 0,
  operations: 0,
}
export const actions = {
  increment({ commit }, step) {
    commit('INCREMENT_VALUE', step)
    commit('INCREMENT_OPERATIONS')
  },
}
export const mutations = {
  INCREMENT_VALUE(state, step) {
    state.value += step
    // state.operations++
  },
  INCREMENT_OPERATIONS(state) {
    state.operations++
  },
}
export const getters = {}
