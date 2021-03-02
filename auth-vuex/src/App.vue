<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">    
    <h1>Google APIs example - oAuth2 (vuex)</h1>
    <p>isReady: {{ gauthReady }}</p>
    <p>isSignedIn: {{ isSignedIn }}</p>
    <p v-if="isSignedIn">{{ user.getBasicProfile().getName() }}</p>
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
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
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
