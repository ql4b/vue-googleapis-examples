import Vue from 'vue'
import Vuex from 'vuex'
import gauth from './modules/gauth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    gauth
  }
})
