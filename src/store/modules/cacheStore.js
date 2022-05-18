const state = {
  cacheMenu: []
}

const getters = {
  cacheMenu: (state) => state.cacheMenu
}

const mutations = {
  SET_CACHEMENU(state, name) {
    state.cacheMenu = [...new Set([...state.cacheMenu, name])]
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
