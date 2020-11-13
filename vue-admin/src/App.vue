<template>
  <Nav :title=title :navigation=settings.navigation></Nav>
  <div v-if="userError" class="alert alert-danger">
    {{ userError }}
  </div>
  <div class="container">
    <Main 
      :columns="settings.columns" 
      :rows="userList" 
      @update="userUpdate"
      @delete="userDelete" />
  </div>
</template>

<script>
import axios from 'axios';
import Nav from './components/Nav';
import Main from './components/Main';
import UserStore from './store/user.store';

export default {
  name: 'App',
  components: {
    Nav,
    Main
  },
  setup() {
    const { list, load, error } = UserStore();
    load();
    return { userList: list, userError: error };
  },
  beforeMount() {
    Promise.all([
      axios.get('http://localhost:3000/settings'),
      this.getAllUsers()
    ]).then(
      responses => {
        this.settings = responses[0].data;
        this.users = responses[1].data;
      }
    )
  },
  data() {
    return {
      title: 'Cavity Eye 7.0.1',
      users: [],
      settings: []
    }
  },
  methods: {
    getAllUsers() {
      return axios.get('http://localhost:3000/users');
    },
    userUpdate(user) {
      axios.patch(
        `http://localhost:3000/users/${user.id}`,
        user
      ).then(
        userResponse => console.log(userResponse)
      ).catch( err => console.error(err) );
    },
    userDelete(user) {
      if (!confirm('msg')) {
        return;
      }

      axios.delete(
        `http://localhost:3000/users/${user.id}`
      )
      // .then( () => this.getAllUsers() )
      // .then( resp => this.users = resp.data )
      .then( () => this.users.splice(
        this.users.indexOf(user), 1
      ) )
      .catch( err => console.error(err) );
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
}
</style>
