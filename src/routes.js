import { createRouter, createWebHistory } from 'vue-router';
import MyHomePageVue from './components/MyHomePage.vue';
import Projects from './components/Projects.vue';
import ContactMe from './components/ContactMe.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MyHomePageVue,
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactMe,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})


export default router;