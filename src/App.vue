<template>
  <div id="app">
    <Register/>
  </div>
</template>

<script>

import Register from './components/Register.vue'

export default {
  name: 'App',
  components: {
    Register
  }
}
</script>

<style>
body{
 margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: rgb(61, 129, 107);
  
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}
</style>
