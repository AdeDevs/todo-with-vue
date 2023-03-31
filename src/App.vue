<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/contact">Contact Me</router-link>
  </div>
  <router-view />
</template>

<style scoped>
@import './styles/style.css'
</style>
