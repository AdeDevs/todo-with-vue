<template>
  <RouterView>
    <div class="main-container">
    <MyHomePage />
  </div>
  </RouterView>
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
