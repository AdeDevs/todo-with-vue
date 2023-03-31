<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/contact">Contact Me</router-link>
  </div>
  <div class="main-container">
    <router-view />
  </div>
</template>

<!-- <script>
import MyHomePage from './components/MyHomePage.vue';

export default {
  name: 'App',
  components: {
    MyHomePage
  }
}
</script> -->

<style scoped>
@import "./styles/style.css";
</style>
