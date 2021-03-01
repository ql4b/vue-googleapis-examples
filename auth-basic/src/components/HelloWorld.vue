<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>isInit: {{ isInit }}</p>
    <p v-if="user && isSignedIn">{{ user.getBasicProfile().getName() }}</p>
    <button
      :disabled="!isInit || isSignedIn"
      @click="signIn"
    >SignIn</button>
    <button
      :disabled="!isInit || !isSignedIn"
      @click="signOut"
    >SignOut</button>
    <button
      :disabled="!isInit || !isSignedIn"
      @click="disconnect"
    >Disconnect</button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      isInit: false,
      isSignedIn: false,
      user: null
    }
  },
  created ()  {
    const that = this
    const checkGALoad = setInterval(function () {
      that.isInit = that.$google.isInit
      if (that.isInit) {
        that.isSignedIn = that.$google.api.auth2.getAuthInstance().isSignedIn.get()
        that.$google.api.auth2.getAuthInstance().isSignedIn.listen(that.signInListener)
        that.$google.api.auth2.getAuthInstance().currentUser.listen(that.userListener)
        clearInterval(checkGALoad)
      }
    }, 200)
  },
  methods: {
    async signIn () {
      try {
        return await this.$google.api.auth2.getAuthInstance().signIn()
      } catch (e) {
        console.log(e)
      }
      
    },
    async signOut () {
      try {
        return await this.$google.api.auth2.getAuthInstance().signOut()
      } catch (e) {
        console.log(e)
      }
      
    },
    async disconnect () {
      return await this.$google.api.auth2.getAuthInstance().disconnect()
    },
    signInListener(status) {
      this.isSignedIn = status      
    },
    userListener(user) {
      this.user = user
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
