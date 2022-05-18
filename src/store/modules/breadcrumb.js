const state = {
  breadcrumb: []
}

const getters = {
  breadcrumb: (state) => state.breadcrumb
}

const mutations = {
  SET_BREADCRUMB(state, breadcrumb) {
    let breadcrumbs = breadcrumb
    if (!Array.isArray(breadcrumb)) {
      breadcrumbs = [breadcrumb]
    }
    const title = []
    state.breadcrumb = breadcrumbs.filter((item) => {
      if (title.includes(item.meta.title)) {
        return false
      }
      title.push(item.meta.title)
      return true
    })
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
