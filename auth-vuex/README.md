# Google Authentication using Vuex store

## Install dependencies

`npm install`

## Configuration

```javascript

// src/main.js
import GoogleAPIs  from 'vue-googleapis'

Vue.use(GoogleAPIs, {
  clientId: '<CLIENT_ID>.apps.googleusercontent.com',
  scope: 'profile email'
})

```

In your component 


```javascript
// src/App.vue

computed: {
    ...mapGetters('gauth',{
      gauthReady: 'isReady',
      isSignedIn: 'isSignedIn',
      user: 'getUser'
    }),
  },
  mounted() {
    this.$store.dispatch('gauth/init')
  },
  methods: {
    ...mapActions('gauth',{
      signIn: 'signIn',
      signOut: 'signOut',
      disconnect: 'disconnect'
    })
  }
```

## Run

`npm run serve`
