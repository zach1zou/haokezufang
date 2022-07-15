import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('HK-Token')) || {}
  },
  getters: {},
  mutations: {
    setUser(state, payload) {
      state.user = payload
      localStorage.setItem('HK-Token', JSON.stringify(payload))
    }
  },
  actions: {},
  modules: {}
})
