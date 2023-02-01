import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: "/",
        name: "Home",
        component: App,
      },
      {
        path: "https://linktr.ee/adedevs",
      },
    ],
  });
  
  createApp(App).use(router).mount("#app");