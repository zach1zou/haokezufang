import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'
import './css/index.css'
import 'amfe-flexible'
// import axios from 'axios'
// axios.defaults.baseURL = 'http://liufusong.top:8080'
// Vue.prototype.$http = axios
Vue.use(Lazyload)

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
