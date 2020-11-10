<template>
  <Nav :title=title></Nav>
  <Main msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Main from './components/Main.vue'
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Main,
    Nav
  },
  data() {
    return {
      title:'Cavity Eye app'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0;
}
</style>
