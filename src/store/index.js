import { createStore } from 'vuex'
import breadcrumb from './modules/breadcrumb'
import cacheStore from './modules/cacheStore'
import userInfo from './modules/userInfo'

export default createStore({
  modules: {
    breadcrumb,
    cacheStore,
    userInfo
  }
})
