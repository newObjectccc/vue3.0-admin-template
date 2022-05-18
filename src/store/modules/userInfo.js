// 若需要持久化，可以考虑 localStorage 存储 userInfo
const state = {
  userInfo: {
    name: 'admin'
  }
}

const getters = {
  userInfo: (state) => state.userInfo
}

const mutations = {
  SET_MAININFO(state, info) {
    state.userInfo = info
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
