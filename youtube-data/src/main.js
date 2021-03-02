import Vue from 'vue'
import App from './App.vue'
import store from './store'
import GoogleAPIs  from 'vue-googleapis'

Vue.use(GoogleAPIs, {
  clientId: '<CLIENT_ID>.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
  scope: 'https://www.googleapis.com/auth/youtube.readonly',
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
