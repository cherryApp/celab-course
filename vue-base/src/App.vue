<template>
  <Nav :title=title></Nav>
  <Main msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Main from './components/Main.vue'
import Nav from './components/Nav'
import { provideI18n } from './plugin/i18nPlugin';
import { messages } from './plugin/messages';

export default {
  name: 'App',
  setup() {
    console.log(messages);
    provideI18n({
      locale: 'en',
      messages
    })
  },
  components: {
    Main,
    Nav
  },
  data() {
    return {
      locale: 'en',
      title: 'hello_world'
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
