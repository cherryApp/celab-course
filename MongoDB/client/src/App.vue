<template>
  <div class="container">
    <div class="row">
      <div class="col-10 offset-1">
        <Table />
      </div>
    </div>
  </div>
</template>

<script>
import Table from './components/Table.vue';

export default {
  name: 'App',
  components: {
    Table,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
