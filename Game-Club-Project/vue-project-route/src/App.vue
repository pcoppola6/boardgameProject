<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <h1>{{ title }}</h1>
  <p>{{ titleTwo }}</p>
  <router-view/>
  <CreateGame />
</template>

<script>
import CreateGame from './components/CreateGame'


export default {
  name: 'App',
  components: { CreateGame },
  data() {
    return {
      title: "Boardgame Website Title Here",
      titleTwo: " This is going to be the main page of the board game wesbite.",
      showCreateBox: false
    }
  },
  methods: {
    toggleCreateBox() {
      if(this.showCreateBox === true) {
        this.showCreateBox = this.showCreateBox
      } else {
        this.showCreateBox = !this.showCreateBox
      }

    }
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
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
