import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)

Vue.config.productionTip = false
// Vue.prototype.$ws = new WebSocket("ws://localhost:3000")

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


