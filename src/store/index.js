import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: JSON.parse(localStorage.getItem('HK-Token')) || {},
    cityName: JSON.parse(localStorage.getItem('City-Name'))
  },
  getters: {},
  mutations: {
    setUser(state, payload) {
      state.user = payload
      localStorage.setItem('HK-Token', JSON.stringify(payload))
    },
    changeCityName(state, payload) {
      state.cityName = payload
      localStorage.setItem('City-Name', JSON.stringify(payload))
    }
  },
  actions: {},
  modules: {}
})
