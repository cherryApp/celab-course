<template>
  <Nav :title=title></Nav>
  <div class="container">
    <Main :columns=settings.columns />
  </div>
</template>

<script>
import axios from 'axios';
import Nav from './components/Nav';
import Main from './components/Main';
import { provideI18n, setMessages } from './plugin/i18nPlugin';
// import { messages } from './plugin/messages';


export default {
  name: 'App',
  components: {
    Nav,
    Main
  },
  setup() {
    provideI18n({
      locale: 'hu'
    });
  },
  beforeMount() {
    Promise.all([
      axios.get('http://localhost:3000/settings'),
      axios.get('http://localhost:3000/users')
    ]).then(
      responses => {
        this.settings = responses[0].data;
        this.users = responses[1].data;
        setMessages(this.settings.translates);
      }
    )
  },
  data() {
    return {
      title: 'app_title',
      users: [],
      settings: []
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
