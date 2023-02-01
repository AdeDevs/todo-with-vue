<template>
  <div class="main-container">
    <MyHomePage />
  </div>
</template>

<script>
import MyHomePage from './components/MyHomePage.vue';

export default {
  name: 'App',
  components: {
    MyHomePage
  }
}
</script>

<style scoped>
@import "./styles/style.css";
</style>
