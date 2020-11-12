<template>
  <Nav :title=title :navigation=settings.navigation></Nav>
  <div class="container">
    <Main 
      :columns="settings.columns"
      :store="userStore" />
  </div>
</template>

<script>
import Nav from './components/Nav';
import Main from './components/Main';

import useUsers from './store/user.store';


export default {
  name: 'App',
  components: {
    Nav,
    Main
  },
  setup() {
    return { userStore: useUsers() };
  },
  async beforeMount() {
    const response = await this.$http.get('/settings');
    this.settings = response.data;
  },
  data() {
    return {
      title: 'Cavity Eye 7.0.1',
      settings: []
    }
  },
  methods: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
