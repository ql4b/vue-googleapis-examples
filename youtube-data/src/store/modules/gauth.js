const STATUS_LOADING  = 'loading'
const STATUS_READY    = 'ready'

export default {
  namespaced: true,
  state: {
    status: STATUS_LOADING,
    signedId: null,
    user: null,
    error: null
  },
  mutations: {
    setStatus(state, status) {
      state.status = status
    },
    setSignedIn(state, signedId) {
      state.signedId = signedId
    },
    setError(state, error) {
      state.error = error
    },
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    init (context) {
      let google = this._vm.$google
      let load = setInterval(function () {
        if (google.isInit) {
          context.commit('setStatus', STATUS_READY)
          context.commit(
            'setSignedIn', 
            google.api.auth2.getAuthInstance().isSignedIn.get()
          )
          google.api.auth2.getAuthInstance().isSignedIn.listen(function (signedId) {
            context.commit('setSignedIn', signedId)
          })
          google.api.auth2.getAuthInstance().currentUser.listen(function (user) {
            context.commit('setUser', user)
          })
          clearInterval(load)
        }        
      })
    },
    async signIn (context) {
      try{
        await this._vm.$google.api.auth2.getAuthInstance().signIn()
      } catch (e) {
        console.error(e)
        context.commit('setError', e.error)
      }      
    },
    async signOut (context) {
      try{
        await this._vm.$google.api.auth2.getAuthInstance().signOut()
      } catch (e) {
        console.error(e)
        context.commit('setError', e.error)
      }
    },
    async disconnect (context) {
      try{
        await this._vm.$google.api.auth2.getAuthInstance().disconnect()
      } catch (e) {
        console.error(e)
        context.commit('setError', e.error)
      }
    },
  },
  getters: {
    isReady(state) {
      return state.status === STATUS_READY
    },
    isSignedIn(state) {
      return state.signedId === true
    },
    getUser(state) {
      return state.user
    }
  }
}