<template>
  <div class="container mt-1">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
