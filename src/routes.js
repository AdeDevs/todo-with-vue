import { createRouter, createWebHistory } from 'vue-router';

import Projects from './components/Projects.vue';
import ContactMe from './components/ContactMe.vue';
import HomeVue from './components/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeVue,
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