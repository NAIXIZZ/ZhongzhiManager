<template>
  <div id="app">
    <Head></Head>
    <div class="app_main">
      <router-view />
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
export default {
  name: "App",
  components: {
    Head,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #f7f7f7;
  /* min-width: 100vw; */
  min-height: 100vh;
}

.app_main {
  padding: 39px 45px;
}
</style>
