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
  color: #000000;
  background-image: url('./assets/cows5.jpg');

  background-size: 250px 250px;
  background-position: bottom;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}
</style>
