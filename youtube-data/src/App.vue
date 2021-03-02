<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">    
    <h1>Google APIs example - YouTube</h1>
    <p>isReady: {{ gauthReady }}</p>
    <p>isSignedIn: {{ isSignedIn }}</p>
    <!-- <p v-if="false || isSignedIn">{{ user.getBasicProfile().getName() }}</p> -->
    <button
      :disabled="isSignedIn || !gauthReady"
      @click="signIn"
    >Sign In</button>
    <button
      :disabled="!isSignedIn || !gauthReady"
      @click="signOut"
    >Sign Out</button>
    <button
      :disabled="!isSignedIn || !gauthReady"
      @click="disconnect"
    >Disconnect</button>
    <button
      :disabled="!isSignedIn || !gauthReady"
      @click="playlists"
    >Playlists</button>
    <div v-if="gauthReady && playlistItems !== null">
      <ul v-if="playlistItems.length > 0">
        <li v-for="item in playlistItems" :key="item.id">
          {{ item.snippet.title}}
        </li>
      </ul>
      <p v-else>No playlists found</p>
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      playlistItems: null
    }
  },
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
    }),
    async playlists() {
      const response = await this.$google.api.client.youtube.playlists.list({
        mine: true,
        part: "snippet",
      })
      if ('result' in response && 'items' in response.result && response.result.items.length > 0) {
        console.log(response.result.items)
        this.playlistItems = response.result.items
      } else this.playlistItems = []

    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
