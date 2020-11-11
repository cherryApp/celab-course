<template>
  <Nav :title=title :navigation=navigation></Nav>
  <Main msg="Welcome to Your Vue.js App"/>
</template>

<script>
import axios from 'axios';
import Main from './components/Main.vue'
import Nav from './components/Nav'
import { provideI18n, setMessages } from './plugin/i18nPlugin';
// import { toRef } from 'vue';
// import { messages } from './plugin/messages';

export default {
  name: 'App',
  setup() {
    // loadMessages('http://localhost:3000/locales');
    provideI18n({
      locale: 'hu'
    })
  },
  beforeMount() {
    Promise.all([
      axios.get('http://localhost:3000/locales'),
      axios.get('http://localhost:3000/navigation')
    ])
      .then( responses => {
        setMessages(responses[0].data);
        this.navigation = responses[1].data;
        /* const title = toRef(props, 'title');
        console.log(title); */
      });
  },
  components: {
    Main,
    Nav
  },
  data() {
    return {
      locale: 'en',
      title: 'hello_world',
      navigation: []
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
