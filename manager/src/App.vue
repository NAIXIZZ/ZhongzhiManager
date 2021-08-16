<template>
  <div id="app">
    <Head></Head>
    <router-view/>
  </div>
</template>

<script>
import Head from '@/components/Head.vue'
export default {
  name: 'App',
  components: {
    Head
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #F7F7F7;
  width: 100vw;
  height: 100vh;
}
</style>
