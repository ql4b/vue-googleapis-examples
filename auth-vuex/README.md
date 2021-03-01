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

## Run

`npm run serve`
