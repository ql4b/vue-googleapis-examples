import Vue from 'vue'
import App from './App.vue'
import store from './store'
import GoogleAPIs  from 'vue-googleapis'

Vue.use(GoogleAPIs, {
  clientId: '<CLIENT_ID>.apps.googleusercontent.com',
  scope: 'profile email'
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
