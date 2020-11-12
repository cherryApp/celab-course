<template>
  <Nav :title=title></Nav>
</template>

<script>
import Nav from './components/Nav.vue';
import { provideI18n } from './plugin/i18nPlugin';
import { messages } from './plugin/messages';

export default {
  name: 'App',
  setup() {
    provideI18n({
      locale: 'hu',
      messages
    });
  },
  components: {
    Nav
  },
  data() {
    return {
      title: 'app_title'
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
