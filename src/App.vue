<template>
  <div id="app">
    <router-view></router-view> 
  </div>
</template>

<script>





export default {
  name: 'App',
  components: {

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
  background-image: url('./assets/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}
</style>
