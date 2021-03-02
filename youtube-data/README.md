# Using YouTube Data API 

This example shows how you can let a Google user access his/her own data (from the YouTube account in this case but you can apply the same logic for every other API) into your Vuejs app/website. 

Here we use the solution from the previous example of `OAuth2` authentication using `Vuex` (check it out [here](https://github.com/ql4b/vue-googleapis-examples/tree/master/auth-vuex)) to manage authentication. 

## Install dependencies

`npm install`

## Configuration

The difference with the previuos example it that here we have to configure the client so that it can access the `YouTube Data API` and set the scope so that the user can view his/her own data. 

```javascript

// src/main.js
import GoogleAPIs  from 'vue-googleapis'

Vue.use(GoogleAPIs, {
  clientId: '<CLIENT_ID>.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
  scope: 'https://www.googleapis.com/auth/youtube.readonly',
})

```

We create a simple function to get `playlist` data

```javascript

// src/App.vue
async playlists() {
  const response = await this.$google.api.client.youtube.playlists.list({
    mine: true,
    part: "snippet",
  })
  if ('result' in response && 'items' in response.result && response.result.items.length > 0) {
    console.log(response.result.items)
    this.playlistItems = response.result.items
  } else this.playlistItems = []

}
```

## Run

`npm run serve`
